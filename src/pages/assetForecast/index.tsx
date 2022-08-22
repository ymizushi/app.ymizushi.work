import { useState } from 'react';

export default function Index() {
  const [currentCash, _setCurrentCash] = useState(500);
  const [asset, setAsset] = useState(1000);
  const [profits, setProfits] = useState(1);
  const [monthlyContribution, setMonthlyContribution] = useState(10);
  const [years, setYears] = useState(10);

  let totalAsset = asset;
  for (let i = 0; i < years; i++) {
    totalAsset =
      ((totalAsset + monthlyContribution * 12) * (100 + profits)) / 100;
  }
  const total = totalAsset + currentCash;

  return (
    <>
      <p>現在の現金資産</p>
      <input
        type={`number`}
        id="currentCash"
        value={currentCash}
        onChange={(e) => _setCurrentCash(parseInt(e.target.value))}
      />

      <p>現在の投資資産</p>
      <input
        type={`number`}
        id="currentAsset"
        value={asset}
        onChange={(e) => setAsset(parseInt(e.target.value))}
      />

      <p>利回り</p>
      <input
        type={`number`}
        id="profits"
        value={profits}
        onChange={(e) => setProfits(parseInt(e.target.value))}
      />

      <p>毎月の拠出額</p>
      <input
        type={`number`}
        id="monthlyContribution"
        value={monthlyContribution}
        onChange={(e) => setMonthlyContribution(parseInt(e.target.value))}
      />

      <p>経過年数</p>
      <input
        type={`number`}
        id="years"
        value={years}
        onChange={(e) => setYears(parseInt(e.target.value))}
      />

      <p>結果</p>
      <p>{total}</p>
    </>
  );
}
