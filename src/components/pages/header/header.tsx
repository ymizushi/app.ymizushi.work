import Link from 'next/link';

export function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link href={`/assetForecast`}>資産予測</Link>
        </li>
        <li>
          <Link href={`/harmonicMotion`}>単振動</Link>
        </li>
        <li>
          <Link href={`/agentSystem`}>エージェントシステム</Link>
        </li>
      </ul>
    </div>
  );
}
