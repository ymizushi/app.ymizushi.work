import { useState, useEffect } from 'react';

export default function AgentSystem() {
  const [agents, setAgents] =  useState([...new Array(100).keys()].map(_ => new Agent()))

  useEffect(() => {
    setInterval(() => {
      setAgents(before => {
        return before.map(agent => {
          agent.move()
          return agent
        })
      })
    }, 100)
  }, [])

  return (
    <svg 
      viewBox={`0 0 ${80} ${80}`}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <g transform={`translate(20, 20)`}>
        { agents.map((agent, index) => {
          return (
            <ellipse key={index} cx={`${agent.point[0]}`} cy={`${agent.point[1]}`} rx="1" ry="1" />
          )
        })}
      </g>
    </svg>
  );
}

class Agent {

  constructor(
    private _point: [number,number] = [0, 0]
  ) {

  }

  get point(): [number, number] {
    return this._point
  }

  set point(value: [number, number]) {
    this._point = value
  }

  move() {
    const x = this._point[0] + (Math.random()-0.5)*10
    const y = this._point[1] + (Math.random()-0.5)*10
    this._point = [x, y]
  }

}
