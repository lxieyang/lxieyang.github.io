import React from 'react';

const londonSketchStyles = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; color: #1a1a1a; background: #f7f7f7; line-height: 1.6; }
  .ls-container { max-width: 960px; margin: 0 auto; padding: 2rem 1.5rem; }
  .ls-container h1 { font-size: 1.8rem; font-weight: 700; margin-bottom: 0.5rem; color: #111; }
  .ls-container h1 .sub { display: block; font-size: 0.95rem; font-weight: 400; color: #666; margin-top: 0.25rem; }
  .ls-container h2 { font-size: 1.25rem; font-weight: 600; margin: 2.5rem 0 0.75rem; padding-bottom: 0.4rem; border-bottom: 2px solid #e0e0e0; color: #222; }
  .ls-container h3 { font-size: 1.05rem; font-weight: 600; margin: 1.5rem 0 0.5rem; color: #333; }
  .ls-container p, .ls-container li { font-size: 0.92rem; color: #333; }
  .ls-container .meta { font-size: 0.88rem; color: #555; margin-bottom: 1.5rem; }
  .ls-container .station-badge { display: inline-block; background: #e8f0fe; color: #1a56db; font-size: 0.82rem; padding: 0.15rem 0.5rem; border-radius: 4px; font-weight: 500; margin-right: 0.25rem; }
  .ls-container .note { background: #fffbe6; border-left: 3px solid #f0c000; padding: 0.6rem 1rem; margin: 0.75rem 0 1rem; font-size: 0.88rem; border-radius: 0 4px 4px 0; }
  /* TOC */
  .ls-container .toc { background: #fff; border: 1px solid #e5e5e5; border-radius: 8px; padding: 1.25rem 1.5rem; margin: 1.5rem 0 2rem; }
  .ls-container .toc-title { font-weight: 600; font-size: 0.95rem; margin-bottom: 0.5rem; }
  .ls-container .toc ol { padding-left: 1.25rem; }
  .ls-container .toc li { font-size: 0.88rem; margin: 0.2rem 0; }
  .ls-container .toc a { color: #1a56db; text-decoration: none; }
  .ls-container .toc a:hover { text-decoration: underline; }
  /* Tables */
  .ls-container .table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 0.75rem 0 1.5rem; }
  .ls-container table { width: 100%; border-collapse: collapse; font-size: 0.84rem; }
  .ls-container th { background: #2c3e50; color: #fff; font-weight: 600; text-align: left; padding: 0.5rem 0.6rem; white-space: nowrap; }
  .ls-container td { padding: 0.45rem 0.6rem; border-bottom: 1px solid #eee; }
  .ls-container tr:hover td { background: #f0f4ff; }
  .ls-container .highlight { font-weight: 700; color: #1a56db; }
  /* Scoring */
  .ls-container .score-table th { background: #34495e; }
  .ls-container .score-table td:first-child { font-weight: 600; }
  .ls-container .best { background: #e8f5e9; font-weight: 700; color: #2e7d32; }
  .ls-container .total-row td { border-top: 2px solid #2c3e50; font-weight: 700; font-size: 0.95rem; }
  /* Conclusion */
  .ls-container .conclusion { background: #fff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 1.25rem 1.5rem; margin: 1rem 0; }
  .ls-container .conclusion .pick { margin: 0.75rem 0; }
  .ls-container .pick-label { display: inline-block; font-size: 0.78rem; font-weight: 700; padding: 0.15rem 0.5rem; border-radius: 3px; margin-right: 0.4rem; }
  .ls-container .pick-first { background: #2e7d32; color: #fff; }
  .ls-container .pick-alt { background: #1565c0; color: #fff; }
  .ls-container .pick-no { background: #c62828; color: #fff; }
  /* Appendix */
  .ls-container .appendix { background: #fafafa; border: 1px solid #e8e8e8; border-radius: 8px; padding: 1.25rem 1.5rem; margin: 1.5rem 0; }
  .ls-container .appendix h2 { border-bottom: none; margin-top: 0; }
  .ls-container .stars { color: #f59e0b; }
  .ls-container ul { padding-left: 1.25rem; margin: 0.5rem 0; }
  .ls-container li { margin: 0.2rem 0; }
  .ls-container hr { border: none; border-top: 1px solid #e0e0e0; margin: 2rem 0; }

  /* Mobile-friendly enhancements */
  @media (max-width: 640px) {
    .ls-container { padding: 1rem 0.75rem; }
    .ls-container h1 { font-size: 1.35rem; }
    .ls-container h1 .sub { font-size: 0.82rem; }
    .ls-container h2 { font-size: 1.1rem; margin: 2rem 0 0.6rem; }
    .ls-container .meta { font-size: 0.8rem; line-height: 1.5; }
    .ls-container table { font-size: 0.75rem; min-width: 600px; }
    .ls-container th { padding: 0.4rem 0.45rem; font-size: 0.75rem; }
    .ls-container td { padding: 0.35rem 0.45rem; }
    .ls-container .toc { padding: 1rem; }
    .ls-container .conclusion { padding: 1rem; }
    .ls-container .appendix { padding: 1rem; }
    .ls-container .note { padding: 0.5rem 0.75rem; font-size: 0.82rem; }
    .ls-container .table-wrap { margin: 0.5rem -0.75rem 1rem; padding: 0 0.75rem; }
  }
`;

const LondonSketchPage = () => {
  return (
    <>
      <style>{londonSketchStyles}</style>
      <div className="ls-container">
        <h1>
          🇬🇧 伦敦酒店交通对比{' '}
          <span className="sub">2026年4月19日 – 4月22日 · 3晚</span>
        </h1>
        <p className="meta">
          行程：4/19 St Pancras到达 → Paddington出发去温莎 · 4/20-21 市区观光 ·
          4/21下午+4/22上午地铁罢工 · 4/22晚希思罗离开
        </p>

        {/* TOC */}
        <div className="toc">
          <div className="toc-title">目录</div>
          <ol>
            <li>
              <a href="#h1">DoubleTree by Hilton West End（Holborn 旁）</a>
            </li>
            <li>
              <a href="#h2">Kimpton Fitzroy London（Russell Square 旁）</a>
            </li>
            <li>
              <a href="#h3">Hilton London Paddington</a>
            </li>
            <li>
              <a href="#h4">Radisson Blu Bloomsbury（TCR 旁）</a>
            </li>
            <li>
              <a href="#h5">The Resident Victoria</a>
            </li>
            <li>
              <a href="#h6">Radisson Blu Hotel, London Euston Square</a>
            </li>
            <li>
              <a href="#score">综合评分</a>
            </li>
            <li>
              <a href="#a1">附录：Bloomsbury 三家酒店地理位置对比</a>
            </li>
            <li>
              <a href="#a2">附录：Radisson Blu TCR vs Bloomsbury</a>
            </li>
            <li>
              <a href="#a3">附录：TCR 站≤5分钟同类酒店</a>
            </li>
          </ol>
        </div>

        {/* Hotel 1 */}
        <h2 id="h1">1. DoubleTree by Hilton West End（Holborn 旁）</h2>
        <p>
          <span className="station-badge">Holborn</span> Central · Piccadilly
          &nbsp;/&nbsp; <span className="station-badge">Russell Square</span>{' '}
          Piccadilly — 步行约4-5分钟
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>目的地</th>
                <th>最佳方式</th>
                <th>时间</th>
                <th>备选方式1</th>
                <th>时间</th>
                <th>备选方式2</th>
                <th>时间</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>Paddington (温莎)</b>
                </td>
                <td>Central→Bond St→Elizabeth</td>
                <td>15 min</td>
                <td>步行至TCR→Elizabeth</td>
                <td>20 min</td>
                <td>出租车</td>
                <td>15-20 min</td>
              </tr>
              <tr>
                <td>
                  <b>St Pancras/King's Cross</b>
                </td>
                <td>Piccadilly线直达</td>
                <td>8 min</td>
                <td>步行</td>
                <td>15 min</td>
                <td>出租车</td>
                <td>8 min</td>
              </tr>
              <tr>
                <td>
                  <b>希思罗机场</b>
                </td>
                <td>TCR→Elizabeth线</td>
                <td>45 min</td>
                <td>Piccadilly线直达</td>
                <td>55 min</td>
                <td>出租车</td>
                <td>50-60 min</td>
              </tr>
              <tr>
                <td>
                  <b>白金汉宫</b>
                </td>
                <td>Piccadilly→Green Park</td>
                <td>15 min</td>
                <td>Central→Bond St→Jubilee</td>
                <td>18 min</td>
                <td>步行</td>
                <td>30 min</td>
              </tr>
              <tr>
                <td>
                  <b>西敏寺/大本钟</b>
                </td>
                <td>Piccadilly→Green Park→Jubilee</td>
                <td>15 min</td>
                <td>步行经Trafalgar Sq</td>
                <td>25 min</td>
                <td>出租车</td>
                <td>12 min</td>
              </tr>
              <tr>
                <td>
                  <b>伦敦塔/塔桥</b>
                </td>
                <td>Central→Bank→District</td>
                <td>18 min</td>
                <td>出租车</td>
                <td>20 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>伦敦眼</b>
                </td>
                <td>Central→TCR→Northern</td>
                <td>17 min</td>
                <td>步行</td>
                <td>25 min</td>
                <td>出租车</td>
                <td>12 min</td>
              </tr>
              <tr>
                <td>
                  <b>圣保罗大教堂</b>
                </td>
                <td className="highlight">Central线直达</td>
                <td className="highlight">5 min</td>
                <td>步行</td>
                <td>18 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>大英博物馆</b>
                </td>
                <td className="highlight">步行</td>
                <td className="highlight">7 min</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>Covent Garden</b>
                </td>
                <td className="highlight">步行</td>
                <td className="highlight">10 min</td>
                <td>Piccadilly线 1站</td>
                <td>5 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>特拉法加广场</b>
                </td>
                <td>Central→Northern</td>
                <td>10 min</td>
                <td>步行</td>
                <td>18 min</td>
                <td>出租车</td>
                <td>10 min</td>
              </tr>
              <tr>
                <td>
                  <b>自然历史博物馆</b>
                </td>
                <td>Piccadilly线直达</td>
                <td>12 min</td>
                <td>出租车</td>
                <td>18 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>海德公园</b>
                </td>
                <td>Central→Lancaster Gate</td>
                <td>12 min</td>
                <td>Piccadilly→Knightsbridge</td>
                <td>10 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>Harrods</b>
                </td>
                <td>Piccadilly线直达</td>
                <td>10 min</td>
                <td>出租车</td>
                <td>15 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>Borough Market</b>
                </td>
                <td>Central→Bank→Northern</td>
                <td>15 min</td>
                <td>出租车</td>
                <td>18 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Hotel 2 */}
        <h2 id="h2">2. Kimpton Fitzroy London（Russell Square 旁）</h2>
        <p>
          <span className="station-badge">Russell Square</span> Piccadilly —
          步行约1分钟（出站即到）
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>目的地</th>
                <th>最佳方式</th>
                <th>时间</th>
                <th>备选方式1</th>
                <th>时间</th>
                <th>备选方式2</th>
                <th>时间</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>Paddington (温莎)</b>
                </td>
                <td>步行至TCR→Elizabeth线</td>
                <td>18 min</td>
                <td>Piccadilly→Holborn→Central→Bond St</td>
                <td>20 min</td>
                <td>出租车</td>
                <td>15-20 min</td>
              </tr>
              <tr>
                <td>
                  <b>St Pancras/King's Cross</b>
                </td>
                <td className="highlight">Piccadilly线 1站</td>
                <td className="highlight">3 min</td>
                <td>步行</td>
                <td>12 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>希思罗机场</b>
                </td>
                <td className="highlight">Piccadilly线直达（无换乘）</td>
                <td className="highlight">55 min</td>
                <td>步行至TCR→Elizabeth</td>
                <td>50 min</td>
                <td>出租车</td>
                <td>50-60 min</td>
              </tr>
              <tr>
                <td>
                  <b>白金汉宫</b>
                </td>
                <td>Piccadilly→Green Park</td>
                <td>12 min</td>
                <td>出租车</td>
                <td>15 min</td>
                <td>步行</td>
                <td>35 min</td>
              </tr>
              <tr>
                <td>
                  <b>西敏寺/大本钟</b>
                </td>
                <td>Piccadilly→Green Park→Jubilee</td>
                <td>12 min</td>
                <td>出租车</td>
                <td>15 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>伦敦塔/塔桥</b>
                </td>
                <td>Piccadilly→Holborn→Central→Bank</td>
                <td>22 min</td>
                <td>出租车</td>
                <td>20 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>伦敦眼</b>
                </td>
                <td>Piccadilly→Green Park→Jubilee</td>
                <td>15 min</td>
                <td>出租车</td>
                <td>15 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>圣保罗大教堂</b>
                </td>
                <td>Piccadilly→Holborn→Central</td>
                <td>10 min</td>
                <td>出租车</td>
                <td>15 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>大英博物馆</b>
                </td>
                <td className="highlight">步行</td>
                <td className="highlight">7 min</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>Covent Garden</b>
                </td>
                <td>Piccadilly线直达</td>
                <td>5 min</td>
                <td>步行</td>
                <td>15 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>特拉法加广场</b>
                </td>
                <td>Piccadilly→Leicester Sq+步行</td>
                <td>10 min</td>
                <td>步行</td>
                <td>20 min</td>
                <td>出租车</td>
                <td>12 min</td>
              </tr>
              <tr>
                <td>
                  <b>自然历史博物馆</b>
                </td>
                <td>Piccadilly线直达</td>
                <td>10 min</td>
                <td>出租车</td>
                <td>18 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>海德公园</b>
                </td>
                <td>Piccadilly→Knightsbridge</td>
                <td>10 min</td>
                <td>出租车</td>
                <td>15 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>Harrods</b>
                </td>
                <td>Piccadilly线直达</td>
                <td>8 min</td>
                <td>出租车</td>
                <td>15 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>Borough Market</b>
                </td>
                <td>Piccadilly→King's X→Northern</td>
                <td>15 min</td>
                <td>出租车</td>
                <td>20 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Hotel 3 */}
        <h2 id="h3">3. Hilton London Paddington</h2>
        <p>
          <span className="station-badge">Paddington</span> Circle · H&amp;C ·
          District · Bakerloo · Elizabeth · Heathrow Express —
          步行约2分钟（与车站直连）
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>目的地</th>
                <th>最佳方式</th>
                <th>时间</th>
                <th>备选方式1</th>
                <th>时间</th>
                <th>备选方式2</th>
                <th>时间</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>Paddington (温莎)</b>
                </td>
                <td className="highlight">步行</td>
                <td className="highlight">2 min</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>St Pancras/King's Cross</b>
                </td>
                <td>Circle/H&amp;C直达</td>
                <td>11 min</td>
                <td>出租车</td>
                <td>15 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>希思罗机场</b>
                </td>
                <td className="highlight">Heathrow Express直达</td>
                <td className="highlight">15 min</td>
                <td>Elizabeth线直达</td>
                <td>30 min</td>
                <td>出租车</td>
                <td>45 min</td>
              </tr>
              <tr>
                <td>
                  <b>白金汉宫</b>
                </td>
                <td>出租车</td>
                <td>12 min</td>
                <td>District→St James's Park</td>
                <td>20 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>西敏寺/大本钟</b>
                </td>
                <td>Elizabeth→Bond St→Jubilee</td>
                <td>12 min</td>
                <td>Circle线直达</td>
                <td>17 min</td>
                <td>出租车</td>
                <td>15 min</td>
              </tr>
              <tr>
                <td>
                  <b>伦敦塔/塔桥</b>
                </td>
                <td>Elizabeth→Liverpool St+步行</td>
                <td>20 min</td>
                <td>Circle线直达</td>
                <td>30 min</td>
                <td>出租车</td>
                <td>25 min</td>
              </tr>
              <tr>
                <td>
                  <b>伦敦眼</b>
                </td>
                <td>Elizabeth→Bond St→Jubilee</td>
                <td>15 min</td>
                <td>Bakerloo→Waterloo</td>
                <td>18 min</td>
                <td>出租车</td>
                <td>20 min</td>
              </tr>
              <tr>
                <td>
                  <b>圣保罗大教堂</b>
                </td>
                <td>Elizabeth→Liverpool St+步行</td>
                <td>18 min</td>
                <td>Circle→Farringdon+步行</td>
                <td>20 min</td>
                <td>出租车</td>
                <td>20 min</td>
              </tr>
              <tr>
                <td>
                  <b>大英博物馆</b>
                </td>
                <td>Elizabeth→TCR+步行</td>
                <td>15 min</td>
                <td>出租车</td>
                <td>20 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>Covent Garden</b>
                </td>
                <td>Elizabeth→TCR+步行</td>
                <td>15 min</td>
                <td>出租车</td>
                <td>15 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>特拉法加广场</b>
                </td>
                <td>Bakerloo→Piccadilly Circus+步行</td>
                <td>15 min</td>
                <td>出租车</td>
                <td>15 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>自然历史博物馆</b>
                </td>
                <td>Circle/District直达</td>
                <td>10 min</td>
                <td>出租车</td>
                <td>12 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>海德公园</b>
                </td>
                <td className="highlight">步行</td>
                <td className="highlight">10 min</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>Harrods</b>
                </td>
                <td>出租车</td>
                <td>12 min</td>
                <td>Circle→换乘</td>
                <td>20 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>Borough Market</b>
                </td>
                <td>Elizabeth→Liverpool St→Northern</td>
                <td>25 min</td>
                <td>出租车</td>
                <td>25 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Hotel 4 */}
        <h2 id="h4">4. Radisson Blu Bloomsbury（Tottenham Court Road 旁）</h2>
        <p>
          <span className="station-badge">Tottenham Court Road</span> Central ·
          Northern · <b>Elizabeth</b> — 步行约3分钟
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>目的地</th>
                <th>最佳方式</th>
                <th>时间</th>
                <th>备选方式1</th>
                <th>时间</th>
                <th>备选方式2</th>
                <th>时间</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>Paddington (温莎)</b>
                </td>
                <td className="highlight">Elizabeth线直达</td>
                <td className="highlight">8 min</td>
                <td>Central→Bond St→Elizabeth</td>
                <td>10 min</td>
                <td>出租车</td>
                <td>15 min</td>
              </tr>
              <tr>
                <td>
                  <b>St Pancras/King's Cross</b>
                </td>
                <td>Northern线 2站</td>
                <td>5 min</td>
                <td>步行</td>
                <td>15 min</td>
                <td>出租车</td>
                <td>8 min</td>
              </tr>
              <tr>
                <td>
                  <b>希思罗机场</b>
                </td>
                <td className="highlight">Elizabeth线直达</td>
                <td className="highlight">35 min</td>
                <td>出租车</td>
                <td>50 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>白金汉宫</b>
                </td>
                <td>Northern→Leicester Sq→Piccadilly</td>
                <td>15 min</td>
                <td>步行</td>
                <td>25 min</td>
                <td>出租车</td>
                <td>12 min</td>
              </tr>
              <tr>
                <td>
                  <b>西敏寺/大本钟</b>
                </td>
                <td>Northern→Embankment→District</td>
                <td>12 min</td>
                <td>步行</td>
                <td>25 min</td>
                <td>出租车</td>
                <td>12 min</td>
              </tr>
              <tr>
                <td>
                  <b>伦敦塔/塔桥</b>
                </td>
                <td>Central→Bank→District</td>
                <td>18 min</td>
                <td>Elizabeth→Liverpool St</td>
                <td>18 min</td>
                <td>出租车</td>
                <td>20 min</td>
              </tr>
              <tr>
                <td>
                  <b>伦敦眼</b>
                </td>
                <td>Northern线直达Waterloo</td>
                <td>8 min</td>
                <td>步行</td>
                <td>20 min</td>
                <td>出租车</td>
                <td>10 min</td>
              </tr>
              <tr>
                <td>
                  <b>圣保罗大教堂</b>
                </td>
                <td>Central线直达</td>
                <td>7 min</td>
                <td>步行</td>
                <td>20 min</td>
                <td>出租车</td>
                <td>12 min</td>
              </tr>
              <tr>
                <td>
                  <b>大英博物馆</b>
                </td>
                <td className="highlight">步行</td>
                <td className="highlight">5 min</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>Covent Garden</b>
                </td>
                <td className="highlight">步行</td>
                <td className="highlight">8 min</td>
                <td>Northern线 1站</td>
                <td>3 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>特拉法加广场</b>
                </td>
                <td>Northern→Leicester Sq+步行</td>
                <td>8 min</td>
                <td>步行</td>
                <td>12 min</td>
                <td>出租车</td>
                <td>8 min</td>
              </tr>
              <tr>
                <td>
                  <b>自然历史博物馆</b>
                </td>
                <td>Central→Holborn→Piccadilly</td>
                <td>15 min</td>
                <td>出租车</td>
                <td>15 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>海德公园</b>
                </td>
                <td>Central→Lancaster Gate</td>
                <td>10 min</td>
                <td>出租车</td>
                <td>12 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>Harrods</b>
                </td>
                <td>出租车</td>
                <td>12 min</td>
                <td>Central→换乘Piccadilly</td>
                <td>15 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>Borough Market</b>
                </td>
                <td className="highlight">Northern线直达</td>
                <td className="highlight">12 min</td>
                <td>出租车</td>
                <td>15 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Hotel 5 */}
        <h2 id="h5">5. The Resident Victoria</h2>
        <p>
          <span className="station-badge">Victoria</span> Victoria · Circle ·
          District — 步行约3分钟
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>目的地</th>
                <th>最佳方式</th>
                <th>时间</th>
                <th>备选方式1</th>
                <th>时间</th>
                <th>备选方式2</th>
                <th>时间</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>Paddington (温莎)</b>
                </td>
                <td>Victoria→Oxford Circus→Bakerloo</td>
                <td>15 min</td>
                <td>Circle线直达</td>
                <td>20 min</td>
                <td>出租车</td>
                <td>15 min</td>
              </tr>
              <tr>
                <td>
                  <b>St Pancras/King's Cross</b>
                </td>
                <td>Victoria线直达</td>
                <td>10 min</td>
                <td>出租车</td>
                <td>15 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>希思罗机场</b>
                </td>
                <td>Circle→Paddington→Elizabeth</td>
                <td>45 min</td>
                <td>Victoria→Green Park→Piccadilly</td>
                <td>55 min</td>
                <td>出租车</td>
                <td>50 min</td>
              </tr>
              <tr>
                <td>
                  <b>白金汉宫</b>
                </td>
                <td className="highlight">步行</td>
                <td className="highlight">10 min</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>西敏寺/大本钟</b>
                </td>
                <td className="highlight">步行</td>
                <td className="highlight">15 min</td>
                <td>District线 2站</td>
                <td>5 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>伦敦塔/塔桥</b>
                </td>
                <td className="highlight">District线直达</td>
                <td className="highlight">15 min</td>
                <td>出租车</td>
                <td>18 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>伦敦眼</b>
                </td>
                <td>District→Westminster+步行</td>
                <td>12 min</td>
                <td>步行</td>
                <td>20 min</td>
                <td>出租车</td>
                <td>10 min</td>
              </tr>
              <tr>
                <td>
                  <b>圣保罗大教堂</b>
                </td>
                <td>District→Blackfriars+步行</td>
                <td>18 min</td>
                <td>出租车</td>
                <td>15 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>大英博物馆</b>
                </td>
                <td>Victoria→Green Park→Piccadilly→Holborn</td>
                <td>20 min</td>
                <td>出租车</td>
                <td>15 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>Covent Garden</b>
                </td>
                <td>Victoria→Green Park→Piccadilly</td>
                <td>15 min</td>
                <td>出租车</td>
                <td>12 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>特拉法加广场</b>
                </td>
                <td>Victoria→Green Park+步行</td>
                <td>12 min</td>
                <td>步行</td>
                <td>20 min</td>
                <td>出租车</td>
                <td>10 min</td>
              </tr>
              <tr>
                <td>
                  <b>自然历史博物馆</b>
                </td>
                <td className="highlight">District线直达</td>
                <td className="highlight">8 min</td>
                <td>出租车</td>
                <td>10 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>海德公园</b>
                </td>
                <td>Victoria→Knightsbridge 1站</td>
                <td>5 min</td>
                <td>步行</td>
                <td>15 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>Harrods</b>
                </td>
                <td>Victoria→Green Park→Piccadilly</td>
                <td>10 min</td>
                <td>出租车</td>
                <td>8 min</td>
                <td>步行</td>
                <td>20 min</td>
              </tr>
              <tr>
                <td>
                  <b>Borough Market</b>
                </td>
                <td>Victoria→Green Park→Jubilee</td>
                <td>15 min</td>
                <td>出租车</td>
                <td>15 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Hotel 6 */}
        <h2 id="h6">6. Radisson Blu Hotel, London Euston Square</h2>
        <p>
          <span className="station-badge">Warren Street</span> Victoria ·
          Northern — 步行~1分钟 &nbsp;/&nbsp;{' '}
          <span className="station-badge">Euston Square</span> Circle · H&amp;C
          · Metropolitan — 步行~4分钟
        </p>
        <div className="note">
          ⚠️ 虽然名字含"Euston Square"，该酒店位于 Tottenham Court Road{' '}
          <b>北端</b>（130号），离 TCR 站的 Elizabeth 线步行约15-18分钟。
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>目的地</th>
                <th>最佳方式</th>
                <th>时间</th>
                <th>备选方式1</th>
                <th>时间</th>
                <th>备选方式2</th>
                <th>时间</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>Paddington (温莎)</b>
                </td>
                <td>Euston Sq→Circle/H&amp;C直达</td>
                <td>15 min</td>
                <td>Victoria→Oxford Circus→Bakerloo</td>
                <td>17 min</td>
                <td>出租车</td>
                <td>15 min</td>
              </tr>
              <tr>
                <td>
                  <b>St Pancras/King's Cross</b>
                </td>
                <td>Victoria线 1站 / Euston Sq 1站</td>
                <td>3 min</td>
                <td>步行</td>
                <td>15-20 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>希思罗机场</b>
                </td>
                <td>Euston Sq→H&amp;C→Paddington→HEX</td>
                <td>35 min</td>
                <td>Northern→TCR→Elizabeth</td>
                <td>45 min</td>
                <td>Victoria→Green Park→Piccadilly</td>
                <td>60 min</td>
              </tr>
              <tr>
                <td>
                  <b>白金汉宫</b>
                </td>
                <td>Victoria→Green Park+步行</td>
                <td>10 min</td>
                <td>出租车</td>
                <td>15 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>西敏寺/大本钟</b>
                </td>
                <td>Victoria→Green Park→Jubilee</td>
                <td>10 min</td>
                <td>Northern→Embankment→District</td>
                <td>12 min</td>
                <td>出租车</td>
                <td>12 min</td>
              </tr>
              <tr>
                <td>
                  <b>伦敦塔/塔桥</b>
                </td>
                <td>Euston Sq→Circle/H&amp;C直达</td>
                <td>19 min</td>
                <td>Northern→Bank→District</td>
                <td>20 min</td>
                <td>出租车</td>
                <td>22 min</td>
              </tr>
              <tr>
                <td>
                  <b>伦敦眼</b>
                </td>
                <td>Victoria→Green Park→Jubilee→Westminster</td>
                <td>12 min</td>
                <td>Northern→Waterloo+步行</td>
                <td>15 min</td>
                <td>出租车</td>
                <td>15 min</td>
              </tr>
              <tr>
                <td>
                  <b>圣保罗大教堂</b>
                </td>
                <td>Northern→TCR→Central 2站</td>
                <td>12 min</td>
                <td>Euston Sq→Circle→Farringdon+步行</td>
                <td>15 min</td>
                <td>出租车</td>
                <td>15 min</td>
              </tr>
              <tr>
                <td>
                  <b>大英博物馆</b>
                </td>
                <td>步行</td>
                <td>13 min</td>
                <td>Northern→TCR+步行</td>
                <td>8 min</td>
                <td>出租车</td>
                <td>8 min</td>
              </tr>
              <tr>
                <td>
                  <b>Covent Garden</b>
                </td>
                <td>Northern→TCR+步行</td>
                <td>12 min</td>
                <td>步行</td>
                <td>18 min</td>
                <td>出租车</td>
                <td>10 min</td>
              </tr>
              <tr>
                <td>
                  <b>特拉法加广场</b>
                </td>
                <td>Northern→Leicester Sq+步行</td>
                <td>10 min</td>
                <td>步行</td>
                <td>22 min</td>
                <td>出租车</td>
                <td>12 min</td>
              </tr>
              <tr>
                <td>
                  <b>自然历史博物馆</b>
                </td>
                <td>Victoria→Victoria站→District</td>
                <td>15 min</td>
                <td>出租车</td>
                <td>18 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>海德公园</b>
                </td>
                <td>Victoria→Oxford Circus+步行</td>
                <td>12 min</td>
                <td>出租车</td>
                <td>10 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>Harrods</b>
                </td>
                <td>Victoria→Green Park→Piccadilly</td>
                <td>12 min</td>
                <td>出租车</td>
                <td>15 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <b>Borough Market</b>
                </td>
                <td>Northern→London Bridge直达</td>
                <td>12 min</td>
                <td>出租车</td>
                <td>18 min</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Scoring */}
        <h2 id="score">综合评分（满分10分）</h2>
        <div className="table-wrap">
          <table className="score-table">
            <thead>
              <tr>
                <th>评价维度（权重）</th>
                <th>DoubleTree (Holborn)</th>
                <th>Kimpton (Russell Sq)</th>
                <th>Hilton (Paddington)</th>
                <th>Radisson (TCR)</th>
                <th>Resident (Victoria)</th>
                <th>Radisson (Euston Sq)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>去Paddington/温莎 (10%)</td>
                <td>7</td>
                <td>6</td>
                <td className="best">10</td>
                <td className="best">9</td>
                <td>7</td>
                <td>7</td>
              </tr>
              <tr>
                <td>去希思罗机场 (15%)</td>
                <td>7</td>
                <td>8</td>
                <td className="best">10</td>
                <td className="best">10</td>
                <td>6</td>
                <td>7</td>
              </tr>
              <tr>
                <td>Westminster景点群 (10%)</td>
                <td>7</td>
                <td>8</td>
                <td>6</td>
                <td>8</td>
                <td className="best">10</td>
                <td>9</td>
              </tr>
              <tr>
                <td>文化景点 (博物馆/剧院) (10%)</td>
                <td>9</td>
                <td>9</td>
                <td>5</td>
                <td className="best">10</td>
                <td>6</td>
                <td>7</td>
              </tr>
              <tr>
                <td>城市景点 (塔/眼/教堂) (10%)</td>
                <td>8</td>
                <td>7</td>
                <td>6</td>
                <td className="best">9</td>
                <td>8</td>
                <td>8</td>
              </tr>
              <tr>
                <td>罢工日步行覆盖 (20%)</td>
                <td>8</td>
                <td>8</td>
                <td>4</td>
                <td className="best">10</td>
                <td>9</td>
                <td>6</td>
              </tr>
              <tr>
                <td>友好度 (少换乘/电梯) (25%)</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td className="best">10</td>
                <td>7</td>
                <td>7</td>
              </tr>
              <tr className="total-row">
                <td>加权总分</td>
                <td>7.2</td>
                <td>7.5</td>
                <td>7.1</td>
                <td className="best">9.5</td>
                <td>7.7</td>
                <td>7.0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="conclusion">
          <h3>结论</h3>
          <div className="pick">
            <span className="pick-label pick-first">首选</span>{' '}
            <b>Radisson Blu Bloomsbury (TCR)</b> —
            Elizabeth线直达Paddington（8分钟去温莎）、直达希思罗（35分钟），且TCR站全站无障碍电梯。罢工日步行5分钟到大英博物馆、8分钟到Covent
            Garden、12分钟到特拉法加广场。换乘最少。
          </div>
          <div className="pick">
            <span className="pick-label pick-alt">备选</span>{' '}
            <b>The Resident Victoria</b> —
            Westminster景点群步行可达（白金汉宫10min、大本钟15min），罢工日活动也方便。但去大英博物馆和希思罗需要换乘，到Paddington偏慢。
          </div>
          <div className="pick">
            <span className="pick-label pick-no">不推荐</span>{' '}
            <b>Hilton Paddington</b> —
            温莎和机场虽然极快，但去大部分核心景点都偏远且需换乘，罢工日周围步行可达的景点只有海德公园。
          </div>
        </div>

        <hr />

        {/* Appendix 1 */}
        <div className="appendix">
          <h2 id="a1">附录：Bloomsbury 三家酒店地理位置对比</h2>
          <p>
            DoubleTree、Kimpton、Radisson Blu 三家酒店本质上在<b>同一个街区</b>
            ，围绕大英博物馆形成三角形：
          </p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>酒店对</th>
                  <th>步行距离</th>
                  <th>时间</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>DoubleTree ↔ Radisson Blu</td>
                  <td>~600米</td>
                  <td>~8分钟</td>
                </tr>
                <tr>
                  <td>Kimpton ↔ DoubleTree</td>
                  <td>~300米</td>
                  <td>~4分钟</td>
                </tr>
                <tr>
                  <td>Kimpton ↔ Radisson Blu</td>
                  <td>~700米</td>
                  <td>~10分钟</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            地理位置几乎一样，差异在于<b>最近的地铁站不同</b>：
          </p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>酒店</th>
                  <th>最近地铁站</th>
                  <th>关键线路</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>Radisson Blu</b>
                  </td>
                  <td>Tottenham Court Road</td>
                  <td>
                    <b>Elizabeth线</b>（直达Paddington + 希思罗）
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Kimpton Fitzroy</b>
                  </td>
                  <td>Russell Square</td>
                  <td>
                    <b>Piccadilly线</b>（直达希思罗，无换乘）
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>DoubleTree</b>
                  </td>
                  <td>Holborn</td>
                  <td>Central + Piccadilly（需换乘到Elizabeth）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul>
            <li>
              <b>怕换乘</b> → Kimpton（Piccadilly线一条线坐到底去机场）
            </li>
            <li>
              <b>要最快</b> → Radisson（Elizabeth线去机场35分钟，去Paddington
              8分钟）
            </li>
          </ul>
        </div>

        {/* Appendix 2 */}
        <div className="appendix">
          <h2 id="a2">
            附录：Radisson Blu Tottenham Court Road vs Radisson Blu Bloomsbury
          </h2>
          <p>
            两家不同的酒店，但基本上<b>门对门</b>
            （相距约1分钟步行）：
          </p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Radisson Blu Bloomsbury</th>
                  <th>Radisson Blu Tottenham Court Road</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>地址</b>
                  </td>
                  <td>9-13 Bloomsbury Street, WC1B 3QD</td>
                  <td>97 Great Russell Street, WC1B 3LB</td>
                </tr>
                <tr>
                  <td>
                    <b>前身</b>
                  </td>
                  <td>Bloomsbury Street Hotel</td>
                  <td>Radisson Blu Edwardian Kenilworth</td>
                </tr>
                <tr>
                  <td>
                    <b>风格</b>
                  </td>
                  <td>偏现代</td>
                  <td>偏传统/精品</td>
                </tr>
                <tr>
                  <td>
                    <b>到TCR地铁站</b>
                  </td>
                  <td>~3分钟步行</td>
                  <td>~3分钟步行</td>
                </tr>
                <tr>
                  <td>
                    <b>到大英博物馆</b>
                  </td>
                  <td>~5分钟步行</td>
                  <td>
                    <b>紧邻博物馆大门</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>两家共享完全相同的交通条件，选哪家看风格偏好和价格。</p>
        </div>

        {/* Appendix 3 */}
        <div className="appendix">
          <h2 id="a3">附录：TCR 站步行≤5分钟的同类高分酒店</h2>
          <p>
            以下酒店与 Radisson Blu Bloomsbury 共享同一个 TCR 地铁站（Elizabeth
            + Central + Northern 三线），交通数据完全相同。
          </p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>酒店</th>
                  <th>星级</th>
                  <th>评分</th>
                  <th>起价/晚</th>
                  <th>到TCR站</th>
                  <th>亮点</th>
                  <th>适合度</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>Radisson Blu Bloomsbury</b>
                  </td>
                  <td>4⭐</td>
                  <td>8.5</td>
                  <td>~$396</td>
                  <td>3 min</td>
                  <td>基准选项，性价比最优</td>
                  <td>
                    <span className="stars">★★★★★</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Radisson Blu TCR</b>
                  </td>
                  <td>4⭐</td>
                  <td>8.5</td>
                  <td>待查</td>
                  <td>3 min</td>
                  <td>Radisson姊妹店，紧邻博物馆</td>
                  <td>
                    <span className="stars">★★★★★</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>The Bloomsbury Hotel</b>
                  </td>
                  <td>5⭐</td>
                  <td>9.1</td>
                  <td>~$786</td>
                  <td>
                    <b>2 min</b>
                  </td>
                  <td>紧邻大英博物馆，图书馆+露台，地暖浴室</td>
                  <td>
                    <span className="stars">★★★★★</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>St Giles London</b>
                  </td>
                  <td>3⭐</td>
                  <td>7.3</td>
                  <td>~$186</td>
                  <td>
                    <b>1 min</b>
                  </td>
                  <td>离站最近，价格最低，有健身房</td>
                  <td>
                    <span className="stars">★★★</span>☆☆
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Zedwell Underground</b>
                  </td>
                  <td>3⭐</td>
                  <td>7.3</td>
                  <td>~$318</td>
                  <td>2 min</td>
                  <td>
                    概念酒店，隔音好，<b>无窗房不适合老人</b>
                  </td>
                  <td>❌</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3>推荐排序（TCR站圈）</h3>
          <ol>
            <li>
              <b>Radisson Blu Bloomsbury / TCR</b> —
              性价比最优（~$396/晚，评分8.5）
            </li>
            <li>
              <b>The Bloomsbury Hotel</b> —
              体验最优（~$786/晚，评分9.1，5星服务）
            </li>
            <li>
              <b>St Giles London</b> —
              预算最优（~$186/晚，评分7.3，位置无可挑剔但设施基础）
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export const Head = () => (
  <>
    <title>伦敦酒店交通对比（2026/4/19 – 4/22）</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex, nofollow" />
  </>
);

export default LondonSketchPage;
