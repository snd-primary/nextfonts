import { ZenKakuGothicNew, SourceCodePro } from "./fonts"
import styles from './page.module.css'

const quote = '\'';

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={`${SourceCodePro.className}`}>next/fonts sample(v13.5.1)</h1>
      </header>
      <div className={styles.container}>
        <div className={`${ZenKakuGothicNew.className} ${styles.font} ${styles.content}`}>
          <small className={styles.fontName}>font-family: {quote}Zen Kaku Gothic New{quote} by next/font/google</small>
          <h2>さるかに合戦</h2>
          <h3>母を殺された子ガニが協力を得て、猿をやっつける話</h3>
          <div className={`${styles.paraContainer} ${styles.lhJp}`}>
            <p>お腹を空かせたカニのお母さんが食べ物を探していると、そこに柿を持った乱暴者の猿がやって来た。カニが物欲しそうに見ていると、猿は目の前で柿を食べ、その種をカニに投げつけた。</p>
            <p>仕方なくカニは別の食べ物を探しているとおにぎりが落ちていた。猿もそれを見つけたが、カニが必死になってこれは自分の物だというと、猿は柿の種と取り替えないかと持ちかける。カニは断るが、猿は勝手におにぎりを食べて柿の種を置いていってしまう。</p>
            <p>カニが柿の実を食べようとしたが、実に手が届かない。そこに意地悪な猿がまたやって来た。猿は「おいらが柿の実をとってきてやる」と言って勝手に木に登り、柿の実を次々と食べていき、カニにはまだ熟れていない青い柿をぶつける。</p>
            <p>その拍子にカニの甲羅が割れて3匹のカニの子が産まれたが、その怪我がもとで、カニのお母さんは死んでしまった。やがて大きくなった3匹のカニの子は、母親の敵討ちをしようと決心し、栗と蜂と牛の糞と臼を仲間に入れて連携して猿を懲らしめることに成功した。</p>
          </div>
        </div>
        <div className={`${SourceCodePro.className} ${styles.font} ${styles.content}`}>
        <small className={styles.fontName}>font-family: {quote}SourceCodePro{quote} by next/font/google</small>
          <h2>The Three Little Pigs</h2>
          <h3>A story of hard work and perseverance</h3>
          <div className={`${styles.paraContainer} ${styles.lhEN}`}>
            <p>Once upon a time, there were three little pigs who lived with their mother. When they were old enough, their mother told them to go out into the world and build their own houses.</p>
            <p>The first little pig was lazy and decided to build his house out of straw. The second little pig was a bit more industrious and built his house out of sticks. The third little pig was the most hardworking and built his house out of bricks.</p>
            <p>One day, a big bad wolf came to the forest. He saw the first little pig{quote}s house and huffed and puffed and blew the house down. The first little pig ran to the second little pig{quote}s house.</p>
            <p>The big bad wolf came to the second little pig{quote}s house and huffed and puffed and blew the house down. The two little pigs ran to the third little pig{quote}s house.</p>
            <p>The big bad wolf came to the third little pig{quote}s house and huffed and puffed and huffed and puffed, but he could not blow the house down.</p>
            <p>The big bad wolf tried to climb down the chimney, but the third little pig had boiled a big pot of water and was waiting for him. The big bad wolf fell into the pot of boiling water and died.</p>
            <p>The two little pigs learned their lesson and decided to build their houses out of bricks. They lived happily ever after.</p>
            <p>Moral of the story: Hard work and perseverance always pay off.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
