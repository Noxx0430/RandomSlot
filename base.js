$(".text").on("keyup", function(){
  const text = $(this).val();
  const result = text.replace(/\<.*?\>|\//g, "").replace(/\n/g, ",").split(",").filter(Boolean).join("|");
  console.log(result);
})

/*==============================
  Character Arry
==============================*/

Arry_N = ("ネコ|ネコビルダー|ネコモヒカン|タンクネコ|ネコカベ|ゴムネコ|バトルネコ|勇者ネコ|暗黒ネコ|キモネコ|美脚ネコ|ムキあしネコ|ウシネコ|ネコキリン|ネコライオン|ネコノトリ|ネコUFO|天空のネコ|ネコフィッシュ|ネコクジラ|ネコ島|ネコトカゲ|ネコドラゴン|ネコキングドラゴン|巨神ネコ|ネコダラボッチ|ネコジャラミ|ネコ超人|ネコ超人2|真ネコ超人").split("|");

Arry_E = ("ネコ女優|ネコ聖母|ネコマッチョ|カンフーにゃんこ|酔拳にゃんこ|ネコダンサー|Mr.|Super Mr.|Hyper Mr.|猫縛り|猫縛りNEO|猫縛り極上|女王猫|処刑人|暗黒嬢|ネコの箱詰め|ネコギャング|重機C・A・T|ネコパンツ|ネコ葉っぱ|ネコぺろきゃん|もねこ|スターもねこ|スーパースターもねこ|ネコリンリン|ネコワイルド|イチリンリン|ネコ忍者|ガマネコ忍者|ムササビネコ忍者|ネコゾンビ|デビルネコ|ネコボーン|ネコざむらい|ネコナイト|ネコパティシエ|スモウネコ|マダム・ザ・スモウ|ネコにぎり|ネコフィーバー|ネコカーニバル|ネコアミーゴ|ネコスカート|ネコタイツ|ねこななふん|ネコヴァルキリー|ネコヴァルキリー・真|ネコヴァルキリー・聖|ネコムート|狂乱のネコムート|覚醒のネコムート|ケリ姫|フルカラーケリ姫|ウェディングケリ姫|ネコひめ|ネコひめビューティ|ネコカプセル|ねこ盛り|マスクオブネコ|ネコレスラー|芸者ねこ|ネコでありんした|10式戦車|ネコ搭乗10式戦車|ネコポン|ネコポニョン|ネコ忍者～青～|ネコ忍者～橙～|弱酸性エル|弱酸性エルCC|レッドマローン|レッドマローンCC|歌謡にゃんこ|メガにゃんこ|メガにゃんこEX|にゃんこ3兄弟|秘密要塞ネコロス|癒術士|癒術士CC|にゃんこ化癒術士CC|メルク|メルクCC|にゃんことメルクCC|マメマメにゃんこ|ラブラブにゃんこ|ネコフラワー|にゃんこ扇風|ネコボンバー|ウルフとウルルン|タマとウルルン|覚醒のタマとウルルン|ヒカキン|ビキャキン|ムキャキン|ネコンドー|ネコンドーHG|ふにゅふにゅネコ|むきゅむきゅネコ|神様|シークレット神様|ネコチュートリアル|裏チュートリアル|ヌボボ|ゴールボ|綾小路 翔|翔やん＆にゃんこ|早乙女 光|光＆にゃんこ|西園寺 瞳|トミー＆にゃんこ|星グランマニエ|ランマ＆にゃんこ|白鳥松竹梅|松＆にゃんこ|コニャンダム|ネコニャンダム|覚醒のネコニャンダム|にゃんぼう|ネコトーピード|極道にゃんこ|ヤクザヴァンパイア|ゆきにゃん|ビューティゆきにゃん|ミスターニンジャ|タンタン|ティティ|ティティCC|ネコティティCC|山岡実乃里|クイーンみのりん|中村奏絵|クイーンかにー|ネコ小籠包|ネコ大籠包|アイルー|アイルー＆メラルー|シェリア 【キリン】|シェリア 【キリンX】|リオレウス|リオレウス＆にゃんこ|リオレイア|リオレイア＆にゃんこ|キリンネコ|キリンネコキリン|ちびネコ|ちびネコビルダー|ちびネコモヒカン|ちびタンクネコ|ちびネコカベ|ちびゴムネコ|ちびバトルネコ|ちび勇者ネコ|ちび暗黒ネコ|にゃんこバーガー|にゃんこキングバーガー|にゃんこバーガーセット|おでん|おでんCC|ちびキモネコ|ちび美脚ネコ|ちびムキあしネコ|ちびウシネコ|ちびネコキリン|ちびネコライオン|ちびネコノトリ|ちびネコUFO|天空のちびネコ|死にたてにゃんこ|化けにゃんこ|復活にゃんこ|ゴーレム|うさぎゴーレム|ボルケーノゴーレム|ニャームス|ネコニャームス|ポチ|タンクポチ|クロミ|クロミとにゃんこたち|せつ子|せつ子Love鯖|ねば～る君|ねば～る君とにゃんこ|ネコずきんミーニャ|ラブリィずきんミーニャ|覚醒ラブずきんミーニャ|なめこタンク|なめこタンク＆にゃんこ|白ネコなめこ|キモ白ネコなめこ|要塞なめこ|なめこ＆要塞にゃんこ|ちびほむら|ちび魔法少女ほむら|ちび悪魔ほむら|ネコ博士|ネコ博士＆ネコ|ちびネコフィッシュ|ちびネコクジラ|ちびネコ島|ちびネコトカゲ|ちびネコドラゴン|ちびネコキングドラゴン|ちび巨神ネコ|ちびネコダラボッチ|ちびネコジャラミ|CPAC|PPAP|ナゾウサギ|兎宮王道|宮木武蔵|主演 宮木武蔵|覚醒 宮木武蔵|ハッピー100|幸せ連鎖子ハッピー100|ネコまねき|ネコまねき・寿|ぐでたまにゃんこ|ぐでオムにゃんこ|ぐでベネにゃんこ|ネコ仙人|ネコ老師|仮面のネコ仙人|ノラ|覚醒ノラ|ネコセイバー|英霊ネコセイバー|ネコセイバーオルタ|ちび桜|ちび桜CC|記念ネコ|記念ネコビルダー|ねこ農家|ねこカブ農家|謎仮面のウララー|ネコ仮面のウララー|ネコ神面のウララー|氷上聡里＆ネコ|氷上聡里＆ネコCC|ハニトンくん|ハニトンくん＆にゃんこ|イモウト|イモウトCC|ネコゲンドウ＆ネコ冬月|月のネコゲンドウ＆ネコ冬月|ちびカヲル|プラグスーツのちびカヲル|月の少年ちびカヲル|狂乱のもねこ|狂乱のスターもねこ|太秦麗＆ネコ|太秦麗＆ネコCC|ぶんぶんネコライダー|ぶんぶんロボライダー|ぶんぶんネコライダーL|白にゃんこ剣士|黒にゃんこ剣士|激・神さま|超・神さま|きたろう|ゲゲゲの鬼太郎|目玉おやじ|入浴おやじ|ネコ士郎|魔術師見習いネコ士郎|フィリバスターX|フィリバスターY|メタフィリバスター|土偶戦士ドグ丸|土偶戦士ドグえもん|覚醒戦士ドグえもん|十字架天使|クロスエンジェル|ストライク天使|ネコ若神子|ネコ神帝|ネコデビル|ネコ邪神|ネコの助|ネコ老守|グミネコ|ラッキーネコ|グミネコソーダ|おやじネコ（店主）|おやじネコ（現役）|ネコ春麗|ネコ春麗CC|フェンリルとウルス|ミケとウルス|覚醒のミケとウルス|ネコヤキソバン|うまい太い大きいネコ|ネコ少年|ネコ学生|達人ウリル|ネコ仮面のウリル|天使男ジャック|神帝男ジャック|レアガチャネコ|福引ガチャネコ|チビクロプスネコタマゴ|チビクロプスネコ|雷電のチビクロプスネコ|イディN|イディN2|ネコパンダ|ネコ玄馬|ネコウエハース|ネコウエハースBIG|金塊ネコ|キングネコインゴット|キングネコカーメン|古神面ドロン|ネコ神面ドロン|覚醒ネコ神面ドロン|カブトネコ|ゴールデンオオカブトネコ|クワガタネコ|キングクワガタネコ|ジャガンドーJr|破壊神ジャガンドーJr|ネコキリンモドキ|駿馬ネコキリンモドキ|ネコノトリッキー|天馬ネコノトリッキー|ネコノドラゴーン|名馬ネコノドラゴーン|100万ドルのネコ|1億ドルのネコ|シャオチョン＆ネコ|シャオチョン＆ネコCC|ジェアー＆ネコ|ジェアー＆ネコCC|爆竹ネコ|爆竹ネコビルダー|幼馴染にゃんこ|彼女にゃんこ|おてんばネコライオン|鉄仮面ネコライオン|ネコクバンケシ|ネコクバンチョウ|古獣ナーラ|雷古獣ナーラ|覚醒古獣ナーラ|古びたタマゴN001|謎のタマゴN001|ネコはにわ|古びたタマゴN201|悪のタマゴN201|ネコソシスト|古びたタマゴN003|悪のタマゴN003|ネコサボテン|古びたタマゴN202|赤いタマゴN202|アーマードホタルネコ|雨取千佳＆ネコ|雨取千佳＆ネコCC|古びたタマゴN004|謎のタマゴN004|ネコスーパーカー|石の上にも10年ネコ|石の上にも10年ネコ像|古びたタマゴN000|古のタマゴN000|猿人ネコルーザ").split("|");

Arry_R = ("ネコホッピング|ネコマサイ|ネコキョンシー|ネコ車輪|ネコ太陽|ネコクール|ネコエステ|ネコジェンヌ|ネコパーフェクト|ねこジュラ|ねこジュラシッター|ねこジュラザウルス|ねこファイター|メガトンファイター|マキシマムファイター|ねこ海賊|ニャーコック船長|ニャック・スパロウ|ねこ泥棒|怪盗ニャコン|ネゴエモン|ねこ僧侶|ねこ坊主|ネコ法師|ねこ占い師|ねこふんど師|ねこ医師|ネコシャーマン|ネコラマンサー|ネコオドラマンサー|ネコ魔女|ネコマージョ|ネコビマージョ|ネコアーチャー|ネコキューピット|ネコいて座|ネコ魔剣士|双剣ネコ魔剣士|双炎舞ネコ魔剣士|ネコブ・ロンズ|芸術のネコスタチュ|ネコクイズ王|ネコ運動会|ネコラッチ|ネコ棒倒し|剣士|剣士ジョニー|ウシ姫|キリン姫|チビガウ|チビガウガウ|ネコリーマン|ネコ怨み|ネコ火祭り|トナカイフィッシュ|ネコ魚のお造り|フィッシュ・ド・ノエル|ドロイド|ニャンドロイド|ハルドロイド|ネコと宇宙|ニャア少佐|駆動戦士ネコ|にゃんこ成人|にゃんこ病人|にゃんこ囚人|吾輩は鬼である|ネコ紳士|ネコ紳士同盟|ひなにゃんこ|超号珍ニャジンガー|ニャラジン|ネコなわとび|ネコネコなわとび|ネコ蕎麦屋|ネコ乙女|モトコ|サホリ|マジでコイしてる|コイ・the・Night|キスヨリ・ス・ゴイ|マダム・ザ・花嫁|マダム・ザ・王様|マダム・ザ・サバンナ|セレス|セレスCC|ノノ|ノノCC|オルガ|オルガCC|ノルン|ノルンCC|よいち|よいちCC|セラム|セラムCC|フウ|フウCC|女王様の休日|いつものOL|コールセンターのOL|カラクリにゃんこ|ネコ人形師|ネコチャッピー|うらめしにゃん|ハナメガにゃん|凧にゃん|カンフーにゃんこG|酔拳にゃんこG|剛拳にゃんこG|ねこガンマン|ねこウエスタン|ねこロデオ|たけうまねこ|トーテムねこ|ねこ雑技団|ブリキネコ|プレーンネコ|ネコロボット|ねこロッカー|ねこアーティスト|ねこラーメン道|ねこ人魚|ねこソルジャー|ネコカメラマン|ねこフープ|ねこトリプルフープ|ねこグルグルフープ|ドラリー剣士|ドラリー魔法使い|ネコヤンキー|ネコスケバン|マシュマロにゃん|キモマロにゃん|タクヤとユキ|タクヤとユキとネコ|タクヤとビューティユキ|にゃんこカートR|にゃんこカートG|にゃんこカートP|サイキックネコ|ネオサイキックネコ|デビルサイキックネコ|ねこ陰陽師|魔法少女ねこ|ねこ大魔王|ドラムメニャー|プラカードにゃん|ネコぺったん|百太郎|百太郎CC|マルコ|マルコCC|ターマ|ターマCC|エリ|エリCC|フィオ|フィオCC|マーズピープル|マーズピープルCC|にゃんぷきん|ねこランタン|死神ネコ|光の神徒ヴァルキリー|光の神徒ヴァルキリーCC|神徒ブリュンヒルデ|神徒ブリュンヒルデCC|神徒スルズ|神徒スルズCC|ネコのプレゼント|ネコプレゼント|剣士(城ドラ)|セーラー服剣士|明王の剣士|騎馬兵|森の騎馬兵|迅雷の黒騎馬兵|アシュラ|武者アシュラ|傾奇者アシュラ|バトルバルーン|海賊バトルバルーン|バトルバルーンUFO|ドラゴンライダー|ボーンドラゴンライダー|フレイムドラゴンライダー|プリティキャット|ラブリープリティキャット|サイバープリティキャット|サイクロプス|鋼鉄のサイクロプス|時空のサイクロプス|なめこ|なめこ＆にゃんこ|ふてニャン|モミモミふてニャン|ネコ阿波踊り|ネコソーラン|ネコ舞踊ゴージャス|ネコまどか|魔法少女ネコまどか|ネコほむら|魔法少女ネコほむら|ネコさやか|魔法少女ネコさやか|ネコマミ|魔法少女ネコマミ|ネコ杏子|魔法少女ネコ杏子|ちびまどか|ちび魔法少女まどか|ちびアルティメットまどか|ネコキュゥべえ|タンクキュゥべえ|ネコ屋台|ネコの宅配便|ネコバサミ|ネコチェーンソー|草刈りネコ|ピコ太郎|ネコ太郎|殺意のネコ|真・殺意のネコ|改心のネコ|ネコストーン|ネコクリーナー|ネコカメカー|ネコボクサー|ネコチャンピオン|ネコリベンジ|ネコエッグ|ネコエッグ2|赤髪のゆきにゃん|赤髪のビューティゆきにゃん|なめネコ|ネコなめ|ぐでたまプレート|ぐでたまベーコンプレート|ネコ桜|エプロンネコ桜|夢見るネコ桜|ネコ凛|魔術師ネコ凛|ネコイリヤ|雪の妖精ネコイリヤ|ちび士郎|ちび士郎CC|ネコ探査機|ネコサーチMkⅡ|ネコサテライト|ネコバレー|ネコバレエ|ネコカレー|ガラスネコ|ガラスネコビルダー|クリスタルネコビルダー|矢部明雄|矢部明雄CC|矢部＆ガンダーロボCC|虹谷彩理|虹谷彩理CC|紺野美崎|紺野美崎CC|片桐恋|片桐恋CC|猫塚かりん|猫塚かりんCC|めんトリ|めんトリCC|ちびシンジ|プラグスーツのちびシンジ|黒プラグスーツのちびシンジ|ネコキリン初号機|ネコキリン2号機|ネコレイ|ネコアヤナミレイ（仮称）|ネコアスカ|エプロンネコアスカ|ネコマリ|極秘入国ネコマリ|ポコタ|ポコタCC|オビス|オビスCC|ココ|ココCC|太秦萌＆ネコ|太秦萌＆ネコCC|松賀咲＆ネコ|松賀咲＆ネコCC|小野ミサ＆ネコ|小野ミサ＆ネコCC|そうまにゃん|スマートそうまにゃん|子連れにゃんこ|ネコワゴンサービス|ネコバケーション|古代ネコ|現代ネコ|未来ネコ|アーチャーネコ|英霊アーチャーネコ|ネコライダー|英霊ネコライダー|ヤマト王子|ヤマト神帝|ヤマト爆神|ねこ娘|ネコねこ娘|カノとソウマ|カノとソウマとネコ|ネコマタドール|ネコフラメンコ|ネコエキゾチック|ネコ兄弟S|ネコバカ兄弟S|ネコ2D|ネコ3D|スーパーにゃん|ジャイにゃん|ネコリュウ|ネコリュウCC|ゴウキリン|ゴウキライオン|ネコメデューサ|ネコツインテール|ネコナーガ|ネコ武闘家|ネコ師範|ネコマスター|ソラカラちゃん|ソラカラちゃん＆ネコ|ネコスライム|ネコゼリーフィッシュ|ネコサック|ネコウォッカ|ネコックマ|ネコブラックマ|ネコックマンケン|ネコミク|ネコミクCC|ラガーにゃん|ニャメフト|ネコUFO（日清焼そばコラボ）|ネコ焼そばUFO|ネコファントム|ケムリネコ|ネコカヲル|月面のネコカヲル|ネコベーカリー|ネコブーメラン|ネコルカ|ネコルカCC|ネコバイソン|ネコバイソンCC|ネコバルログ|ネコバルログCC|ネコサガット|ネコサガットCC|ネコベガ|ネコベガCC|ごろにゃん|ごろにゃーん|ネコリン|ネコリンCC|ネコレン|ネコレンCC|ネコ乱馬|ネコらんま|ネコあかね|ネコあかね（道着）|ネコゴジラ|シンネコゴジラ|悪魔研究家|邪悪な悪魔研究家|ネコハーメルン|虚無僧ネコ|ネコ書道|ネコ茶道|ナナ＆ネコ|ナナ＆ネコCC|エミリア＆ネコ|エミリア＆ネコCC|古びたタマゴN101|赤いタマゴN101|飛脚ネコ|古びたタマゴN102|青いタマゴN101|ネコターさん|古びたタマゴN103|黒いタマゴN103|ネコガスマスク|古びたタマゴN104|翠のタマゴ|ネコオペ|古びたタマゴN105|青いタマゴN105|ネコスマッシュ|古びたタマゴN106|黄色いタマゴN106|ネコキノコ").split("|");

Arry_G = ("ネコぼさつ|ネコせんじゅ|ネコにょらい|ネコ番長|怒りのネコ番長|ネコザイル|ネコ裸踊り|ネコカンカン|ねこタツ|ねこTV|ねこタコつぼ|オタネコ|ネコハッカー|ネコスーパーハッカー|ネコスイマー|ネコバタフライ|ネコ半魚人|ネコリンゴ|カオルくん|ネコアップル|ネコバスたぶ|セクシーネコバスたぶ|ネコバスたぶゴールデン|ねこ寿司|ねこリーゼント|ネコ極上|執行者|執行者999|ジャッジメント|眠れるケリの美女|眠れるケリの美女Ⅱ|ひたすら眠れるケリの美女|狂乱のネコ|狂乱のネコビルダー|大狂乱のネコモヒカン|狂乱のタンクネコ|狂乱のネコカベ|大狂乱のゴムネコ|狂乱のバトルネコ|狂乱の勇者ネコ|大狂乱の暗黒ネコ|狂乱のキモネコ|狂乱の美脚ネコ|大狂乱のムキあしネコ|狂乱のウシネコ|狂乱のキリンネコ|大狂乱のネコライオン|狂乱のネコノトリ|狂乱のネコUFO|大狂乱の天空のネコ|狂乱のネコフィッシュ|狂乱のネコクジラ|大狂乱のネコ島|狂乱のネコトカゲ|狂乱のネコドラゴン|大狂乱のネコキングドラゴン|狂乱の巨神ネコ|狂乱のネコダラボッチ|大狂乱のネコジャラミ|アウラ|アウラCC|レイ|レイCC|金ネコ|金ネコビルダー|金ピカネコビルダー|ねねこ|スターねねこ|にゃんこ城Mini|にゃんこ城Jr|にゃんこ城Max|窓辺の乙女ネコ|窓辺の姫君ネコ|窓辺の舞妓にゃん|ネコバーベル|ネコRG|ネコデリバリー|ネコスケート|よいではにゃいか|にゃんでやねん|ネコトースター|ネコ映写機|ネコクラシック|ユーリンチー|転生霊鳥ユーリンチー|ゲキリンチー|厨房マンボウ|工房マンボウ|アロイス|アロイスCC|シトルイユ|シトルイユCC|ネコサーファー|ネコ漂流|ネコ漂流記|メタルネコ|メタルネコビルダー|SV-001|SV-001CC|アレンオニール|アレンオニールCC|ハロウィンねねこ|ハロウィン魔女ねねこ|仮装ハロウィンねねこ|豊穣の女神フレイヤ|豊穣の女神フレイヤCC|おかめはちもくネコ|おかめの水博士|おかめ名誉客員教授|ボンボンネコ|ネコボンのパパ|ネコボンのパパのパパ|見習いスニャイパー|ネゴルゴ|ネコルゴ31|ネコウェイ|ネコドローン|ネコタイムマシン|ネコタイフーン|ネコハリケーン|ネコあらし|チアにゃんこ|ネコウエイトレス|にゃんこそば|夏色ねねこ|海辺のねねこ|初夏海辺のねねこ|ネコ特急|ネコ超特急|ネコエクスプレス|ネコ球児|ネコリーガー|ネコゴルファー|キュゥべえ|キュゥべえ＆ネコ|ネコジャンパー|ネコボールター|ネコ奥様|大掃除ねねこ|初詣ねねこ|新春初詣ねねこ|ベリアル|猛進の大逆者ベリアル|イースターねねこ|イースターバニーねねこ|開花イースタバニーねねこ|オルトス|オルトスCC|彩色のオルトスCC|ぐでぐでプリン|ぐでぐでアラモード|ネコフェンシング|ネコ剣道|自由のネコ|早川あおい|早川あおいCC|野球マン1号CC|橘みずき|橘みずきCC|野球マン2号CC|六道聖|六道聖CC|野球マン3号CC|ちびレイ|プラグスーツのちびレイ|ちびアスカ|プラグスーツのちびアスカ|眼帯のちびアスカ|ちびマリ|プラグスーツのちびマリ|オタネコギーク|ギークネコハッカー|戦隊ドリラ|戦隊パワードリラ|シンパワードリラ|戦隊ウチコンガ|戦隊パワーウチコンガ|シンパワーウチコンガ|戦隊チョキンドス|戦隊パワーチョキンドス|シンパワーチョキンドス|戦隊ショベリン|戦隊パワーショベリン|シンパワーショベリン|戦隊チャッソ|戦隊パワーチャッソ|シンパワーチャッソ|ネコ言峰＆ネコギルガメッシュ|ネコギルガメッシュ＆ネコ言峰|ネロ魔身|魔肖ネロ|ひな|剣士ひな|ちびミサト|ヴンダー艦長のちびミサト|ちびリツコ|ヴンダー副長のちびリツコ|ちびアヤナミレイ(仮称)|目覚めのちびアヤナミ|ネコ七福神|ネコ七福邪神|泉のネコ女神|ネコメダリスト|ネコ魔神|騎神アリババ|アリババ神帝|ゴーストアリババ|MEIKO＆ネコ|MEIKO＆ネコCC|日焼けネコ|日焼けネコビルダー|日焼けねこパーマ|救命にゃんこ|ダンゴにゃん兄弟|ネコジェラート|ネコモンド本田|ネコモンド本田CC|バレンタインねねこ|バレンタインチョコねねこ|本命バレンタインねねこ|KAITO＆ネコ|KAITO＆ネコCC|八宝斎|八宝斎（エロジジイ）|久遠寺右京（男装）|久遠寺右京|九能帯刀（道着）|九能帯刀|洗脳されしネコ|洗脳されしネコビルダー|洗脳されしタンクネコ|洗脳されしネコカベ|洗脳されしバトルネコ|洗脳されし勇者ネコ|洗脳されしキモネコ|洗脳されし美脚ネコ|洗脳されしウシネコ|洗脳されしキリンネコ|洗脳されしネコノトリ|洗脳されしネコUFO|早乙女玄馬（パンダ）|早乙女玄馬|洗脳されしネコフィッシュ|洗脳されしネコクジラ").split("|");

Arry_C = ("ネコルガ|ケサランパサラン|ウルトラケサラン|ネコアイス|ネコアイスクイーン|ネコアイスクリスタル|ネコマシン|ネコマシン・破|ネコマシン・滅|鬼にゃんま|鬼神にゃんま|獄炎鬼にゃんま|ネコシュバリエ|ネコベルセルク|ネコパラディン|ねこベビー|ねこベビーズ|ネコベビーカーズ|KHM48|ダークKHM48|KHM46|真田幸村|武神・真田幸村|飛翔の武神・真田幸村|前田慶次|武神・前田慶次|憤怒の武神・前田慶次|織田信長|武神・織田信長|風神のウィンディ|風神のウィンディα|疾風神のウィンディα|雷神のサンディア|雷神のサンディアβ|迅雷神のサンディアβ|地龍ソドム|地龍王ソドム|地龍皇帝ソドム|聖龍メギドラ|聖龍王メギドラ|聖龍皇帝メギドラ|竜騎士バルス|竜騎士王バルス|竜騎士皇帝バルス|神龍かむくら|神龍王かむくら|神龍皇帝かむくら|竜戦機ライデン|竜戦機王ライデン|竜戦機皇帝ライデン|ニムエ|帰化型ニムエ|猿王|SSS猿王|猿帝のクウ|猿帝のクウγ|金猿帝のクウγ|召し豚のカイ|召し豚のカイμ|召し猪のカイμ|宝杖のカッパーマイン|宝杖のカッパーマインκ|光宝杖のカッパーκ|ワイバーン|ニャイバーン|伊達政宗|武神・伊達政宗|邪眼竜の武神・伊達政宗|武田信玄|武神・武田信玄|猛牛の武神・武田信玄|うらしまタロウ|竜宮獣ガメレオン|竜宮超獣キングガメレオン|ツルの恩返し|銀河戦士コスモ|究極戦士コズミックコスモ|ももたろう|爆走兄弟ピーチスター|爆走兄弟ピーチジャスティス|かさじぞう|地蔵要塞カムイ|地蔵要塞ゼロカムイ|かぐやひめ|破壊衛星デスムーン|破壊衛星カオスムーン|ねこナース|ハートフルねこナース|ジョイフルねこナース|上杉謙信|武神・上杉謙信|暴威の武神・上杉謙信|冥界のカリファ|冥界のXカリファ|冥界のXXカリファ|狂乱のケリ姫|狂乱のケリ姫CC|大狂乱のケリ姫|アシルガ|アシランパサラン|アタタタアシラン|クビルガ|クビランパサラン|Ｅ・クビランパサラン|テコルガ|テサランパサラン|ムギワラテサラン|バララガ|バラランパサラン|ピカランバララン|マンボ王|生ける伝説|太平洋の主|覇龍ディオラムス|覇龍王ディオラムス|覇龍皇帝ディオラムス|謎の少女ユキ|謎の少女ユキ＆ネコ|謎のネコ耳少女ユキ|ハルシュト|ハルシュトCC|革命のハルシュトCC|コーネリア|コーネリアCC|ユーヴェンス|ユーヴェンスCC|休日の騎士様ユーヴェンスCC|ミスティカ|ミスティカCC|寂救のミスティカ|アキラ|シャドウ・アキラ|インフェルノ・アキラ|西園寺メカ子|ドクトルDr.メカ子|アストロDr.メカ子|キャットマンダディ|キャットマンダーク|キャットマンライジング|カチカチヤマンズ|炎護射撃車ウーウー|豪炎狙撃車ウーウー|ホワイトラビット|ブラックキャット|グレーフォックス|ヒュージハーミット|ヒュージハーミットCC|ジュピターキング|ジュピターキングCC|モーデン元帥|モーデン元帥CC|ハイドゥ|ハイドゥCC|呪術師デスピエロ|闇商人バビル|奇術科学者クレイG|ウィンディスイート|ウィンディスイートα|デビルサンディア|デビルサンディアβ|軍神オーディン|軍神オーディンCC|トゲルガ|トゲランパサラン|デイダラトゲラン|雪だるまのスノーカイ|雪だるまのスノーカイμ|サンタのメリークウ|サンタのメリークウγ|聖夜のシスターカッパー|聖夜のシスターカッパーκ|天空神ゼウス|ギガントゼウス|Gギガントゼウス|守護神アヌビス|パーフェクトアヌビス|Gパーフェクトアヌビス|美女神アフロディーテ|メガロディーテ|Gメガロディーテ|天誅ハヤブサ|斬魔ハヤブサ|滅殺ハヤブサ|幼獣ガオ|皇獣ガオウ|狂乱のユキ|狂乱のユキ＆ネコ|狂乱のネコ耳ユキ|太陽神アマテラス|テラアマテラス|Gテラアマテラス|繁栄神ガネーシャ|ガネーシャエクサ|Gガネーシャエクサ|トロピカルカリファ|トロピカルXカリファ|真夏のホワイトラビット|真夏のブラックキャット|猫飯拳パイパイ|猫飯拳パイパイZ|猫拳王パイパイDX|閃雷機兵レイ|閃雷機兵プラズマレイ|閃雷輝兵ウイングレイ|鹿目まどか|まどか＆ネコ|暁美ほむら|ほむら＆ネコ|美樹さやか|さやか＆ネコ|巴マミ|マミ＆ネコ|佐倉杏子|杏子＆ネコ|ネコアイスゴースト|ネコアイスファントム|ネコアイスサキュバス|帝国陸軍カタパルズ|撃滅戦車ギガパルド|超撃滅戦車ギガパルド|古代軍船ガレーズ|無敵艦隊シーガレオン|超無敵艦隊シーガレオン|飛空襲撃ボンバーズ|飛行戦艦ボルボンバー|超飛行戦艦ボルボンバー|ネコナースキャンドル|ネコナースマリア|ネコナースサンタマリア|海王神ポセイドン|ポセイドラグーン|Gポセイドラグーン|巫女姫ミタマ|白無垢のミタマ|さるかに合戦|爆音楽奏サルカニヘヴン|超音楽奏サルカニフェス|メビウス|奇跡の調和メビウス|上杉謙信・春|上杉謙信・春爛漫|上杉謙信春うらら|道化師エッグダック|闇道化サイコダック|極悪道化マッドダッグ|黒獣ガオウ|皇獣ガオウダーク|狐娘ヒメユリ|九尾の狐姫ヒメユリ|豊穣の狐姫ヒメユリ|人魚娘ルリィ|宝玉の人魚姫ルリィ|竜宮の人魚姫ルリィ|ミイラ娘レイカ|玉座のミイラ姫レイカ|黄金のミイラ姫レイカ|プリンセスケリ姫号|プリンセスケリ姫号CC|プレミアムケリ姫号CC|今川義元|武神・今川義元|燐火の武神・今川義元|失われし世界のユキ|失われし世界のユキ＆ネコ|失われし世界のネコ耳ユキ|ミシェリア|ミシェリアCC|午睡のミシェリアCC|とどめき|とどめきCC|ニセたま軍団|ネコニセたま軍団|双掌星のシシル＆コマリ|双掌星のシシル＆コマリФ|双輝星のシシル＆コマリФ|常夏の果実カイ|常夏の果実カイμ|観測兵器ガリレオ|時空基地アルマゲドン|超時空基地アルマゲドン|狼娘ディル|虚飾の狼姫ディル|道化の狼姫ディル|ゾンビ娘ヴェルヴェーヌ|死霊の花嫁ヴェルヴェーヌ|満腹の花嫁ヴェルヴェーヌ|火の精霊メララ|火炎の精霊メラバーン|火炎の精霊王メラバーニング|水の精霊ミズリィ|流水の精霊ミズマリン|流水の精霊王ミズマリリン|風の精霊エアル|嵐の精霊エアフワン|嵐の精霊王エアフワンテ|セイバー|セイバーCC|セイバーオルタCC|遠坂 凛|遠坂 凛CC|イリヤスフィール|イリヤスフィールCC|アーチャー|アーチャーCC|ランサー|ランサーCC|ライダー|ライダーCC|ギルガメッシュ|ギルガメッシュCC|黒無垢のミタマ|黒蝶のミタマダーク|幼傑ダルターニャ|英傑ダルターニャ|新島早紀|新島早紀CC|サンバ新島早紀CC|星井スバル|星井スバルCC|暗黒スバルCC|小山雅|小山雅CC|野球マン5号CC|古龍ガングリオン|古龍王ガングリオン|古龍皇帝ガングリオン|風隼さくら|JK風隼さくら|天誅風隼さくら|雷の精霊ボルト|天雷の精霊ピカボルト|天雷の精霊王ギガボルト|エヴァ零号機|エヴァ零号機＆ネコ|エヴァ初号機|エヴァ初号機＆ネコ|エヴァ2号機|エヴァ2号機＆ネコ|エヴァ改2号機コード777|ネコシンジ|ネコトウジ＆ネコケンスケ|ゼロムーンオペレーターズ|ファーストムーンネルフ|温泉天国テルマエ|地底戦隊グランドン|超地底戦隊グランドン|ネコクエスト|ネコクエストXI|ネコクエストXI2|ぐでネコマシン|ぐでネコマシン・卵|亡者探偵ヴィグラー|魔界探偵グラヴィー|魔神探偵グラヴィティー|ちびネコヴァルキリー|ちびネコヴァルキリー・華|ノビルガ|ノビランパサラン|ノビランターバン|灼熱のビーチクウ|灼熱のビーチクウγ|時空神クロノス|クロノストリガー|Gクロノストリガー|ベベ|なぎさ＆ネコ|影傑ダークダルターニャ|黒傑ダークダルターニャ|間桐 桜|間桐 桜CC|スーパーゼウス|全能神スーパーゼウス|スーパーSゼウス|聖フェニックス|聖戦衣化聖フェニックス|ヘッドロココ|スーパーデビル|偽神スーパーデビル|スーパーDデビル|サタンマリア|ワンダーマリア|ヘラクライスト|完璧ヘラクライスト|幸せを願った少年ソウマ|幸せを願った少年ソウマ＆ネコ|幸せを願ったネコ耳ソウマ|黒ちびネコヴァルキリー|黒ちびネコヴァルキリー・紅|カレット|カレットCC|エヴァ8号機|エヴァ8号機＆ネコ|空中艦艇ネコヴンダー|希望の船NNNネコヴンダー|潮風のセーラーカッパー|潮風のセーラーカッパーk|成田甲斐|武神・成田甲斐|豪炎姫の武神・成田甲斐|英雄令嬢メルシュ(第一形態)|英雄令嬢メルシュ(第二形態)|絢爛令嬢メルシュ|角龍グラディオス|角龍王グラディオス|角龍皇帝グラディオス|アイウォルツ|アイウォルツCC|無名のアイウォルツ|リュウ|リュウCC|影ナル者|春麗|春麗CC|ガイル|ガイルCC|ザンギエフ|ザンギエフCC|ブランカ|ブランカCC|ダルシム|ダルシムCC|ケン|ケンCC|ラスヴォース|ファイナルラスヴォース|シンラスヴォース|きんたろう|猛銃戦隊キンレンジャー|超銃戦隊キンレンジャー|冬天使のシシル＆コマリ|冬天使のシシル＆コマリФ|厄災の子キャスリィ|祝祭の聖女キャスリィ|エルメ|エルメCC|マッドシューター・サキ|ナイトバスター・サキ|バットブラスターサキ|冥界神ハデス|デスハーデス|Gデスハーデス|初音ミク|初音ミクCC|桜ミク|桜ミクCC|鏡音リン＆レン|鏡音リン＆レンCC|禍根の魔女キャスリィ|漆黒の魔女ダークキャスリィ|オイルガ|オイランパサラン|スケランカクラン|白夜姫のレイ|白天姫のレイ|第4の使徒|第4のネコ使徒|第6の使徒|第6のネコ使徒|第10の使徒|第10のネコ使徒|第9の使徒|第9のネコ使徒|シャーマンカーン|全能神シャーマンカーン|地獄警官エマ|地獄軍曹エマ|巡音ルカ|巡音ルカCC|アクアシューターサキ|アクアバスターサキ|アクアブラスターサキ|ネコルガの夏|ミクワノパサラン|ファビュラスパサラン|石の精霊ゴロー|岩石の精霊イワゴロー|岩石の精霊王ダイゴロー|竜騎士スカルバルス|ナイトメアバルス|ハロウィンナイトバルス|エドモンド本田|エドモンド本田CC|バイソン|バイソンCC|バルログ|バルログCC|サガット|サガットCC|ベガ|ベガCC|初音ミクマジカルミライ2020大阪|初音ミクCCマジカルミライ2020大阪|初音ミクマジカルミライ2020東京|初音ミクCCマジカルミライ2020東京|前田サンタ慶次|前田クリス慶次|前田クリス慶次DX|幼獣ガル|帝獣ガルディアン|恋女神ショコラディーテ|メガショコラディーテ|初恋令嬢メルシュ（第一形態）|初恋令嬢メルシュ（第二形態）|雪ミク2021|雪ミクCC2021|空中商会コロンブス|輸送兵団アトランチス|超輸送兵団アトランチス|春龍かむくら|神春龍かむくら|神春龍王かむくら|早乙女乱馬|早乙女らんま|天道あかね|天道あかね（道着）|響良牙（ブタ）|響良牙|シャンプー（猫）|シャンプー|ムース（アヒル）|ムース|冒険家カンナ|大冒険少女カンナ|伝説の冒険少女カンナ|黒獣ガルディアン|帝獣ダークガルディアン|ネコ王女|ネコ女王|渚のかぐやひめ|南国衛星サンシャイン|南国衛星スーパーシャイン|召喚少年サトル|悪魔召喚サトル|天草四郎|魔神天草四郎|怨嗟の魔神天草四郎|妖賢女リリン（第一形態）|妖賢女リリン（第二形態）|大賢女リリン|邪龍ヘヴィジャーク|邪龍王ヘヴィジャーク|熱血硬派くにおくん|ドッジボール部くにおくん|オコルガ|オコランパサラン|闇の精霊ヤミィ|暗黒の精霊ヤミノワール|超竜戦機デストロイ|電磁戦機ディアボロス|超電磁戦機ディアボロス|舌切りすずめ|妖怪結社チュンチュン|白騎士キュクロプス|黒騎士キュクロプス|踊り子イズ|魅惑の舞姫イズ|堕天使ルシファー|グランドルシファー|Gグランドルシファー|白い恋人メカ子|ビタースイートメカ子|狩猟娘テルン(第一形態)|狩猟娘テルン(第二形態)|恋番長鬼にゃんま|恋愛番長鬼神にゃんま|服部半蔵|忍神服部半蔵|氷の精霊フリズ|氷結の精霊ブリザーナ|悲嘆の踊り子イズ|哀悼の舞姫ダークイズ|海龍ダライアサン|海龍王ダライアサン|祝福神クロノス|ウェディングクロノス|ナイトビーチリリン|ナイトビーチリリン（第二形態）|ネコ天狗|大妖怪ネコ天狗|早乙女らんま（レオタード）|早乙女らんま（チアガール）|周遊芸団カルーセルズ|奇襲怪光エンヴァンズ|さくら|さくらCC|ルーク|ルークCC|女神ベガ|幻影の加護女神ベガ|伯爵真田幸村|吸血鬼真田幸村|光の女神シリウス|来光の女神シリウス|トナカイ娘テルン|トナカイ娘テルンζ|運命の子フォノ|天命の王フォノウ").split("|");

Arry_D = ("宮本武蔵|剣神・宮本武蔵|聖会長ジャンヌダルク|聖会長ジャンヌダルクψ|天城龍バベル|魔城龍バベル|うしわか丸|巨大神兵ベンケイ|ワンダーモモコ|キューティーモモコ|レジェルガ|レジェランパサラン|終末兵器ムー|極秘研究機関パンドラ|ブラックゼウス|闇次神子ブラックゼウス|幻の精霊ルミナ|夢幻の精霊ルミナリア|超越科学者ヘヴン博士|時空科学者アビス博士|創造神ガイア|ゴッドガイア|豪鬼|豪鬼CC|京坂七穂|京坂七穂・真|ネコ王子|ネコ国王").split("|");

$(window).on("load", function(){
  const All_arry = (Arry_N + Arry_E + Arry_R + Arry_G + Arry_C + Arry_D).replace(/\,/g, "<br>");
  $(".hide_item_area").html(All_arry);

  $(".item_area").html("<div>基本キャラ</div>");
  for(let i = 0; i < Arry_N.length; i++){
    const now_html = $(".item_area").html();
    const add_html = "<label for=\"n" + i + "\"><input type=\"checkbox\" id=\"n" + i + "\" class=\"n" + i + "\" checked><span>" + Arry_N[i] + "</span></label><br>";
    $(".item_area").html(now_html + add_html);
    console.log("num");
  }
  console.log("N END");

  $(".item_area").append("<br><div>EXキャラ</div>");
  for(let i = 0; i < Arry_E.length; i++){
    const now_html = $(".item_area").html();
    const add_html = "<label for=\"e" + i + "\"><input type=\"checkbox\" id=\"e" + i + "\" class=\"e" + i + "\" checked><span>" + Arry_E[i] + "</span></label><br>";
    $(".item_area").html(now_html + add_html);
    console.log("num");
  }
  console.log("E END");

  $(".item_area").append("<br><div>レアキャラ</div>");
  for(let i = 0; i < Arry_R.length; i++){
    const now_html = $(".item_area").html();
    const add_html = "<label for=\"r" + i + "\"><input type=\"checkbox\" id=\"r" + i + "\" class=\"r" + i + "\" checked><span>" + Arry_R[i] + "</span></label><br>";
    $(".item_area").html(now_html + add_html);
    console.log("num");
  }
  console.log("R END");

  $(".item_area").append("<br><div>激レアキャラ</div>");
  for(let i = 0; i < Arry_G.length; i++){
    const now_html = $(".item_area").html();
    const add_html = "<label for=\"g" + i + "\"><input type=\"checkbox\" id=\"g" + i + "\" class=\"g" + i + "\" checked><span>" + Arry_G[i] + "</span></label><br>";
    $(".item_area").html(now_html + add_html);
    console.log("num");
  }
  console.log("G END");

  $(".item_area").append("<br><div>超激レアキャラ</div>");
  for(let i = 0; i < Arry_C.length; i++){
    const now_html = $(".item_area").html();
    const add_html = "<label for=\"c" + i + "\"><input type=\"checkbox\" id=\"c" + i + "\" class=\"c" + i + "\" checked><span>" + Arry_C[i] + "</span></label><br>";
    $(".item_area").html(now_html + add_html);
    console.log("num");
  }
  console.log("C END");

  $(".item_area").append("<br><div>伝説レアキャラ</div>");
  for(let i = 0; i < Arry_D.length; i++){
    const now_html = $(".item_area").html();
    const add_html = "<label for=\"d" + i + "\"><input type=\"checkbox\" id=\"d" + i + "\" class=\"d" + i + "\" checked><span>" + Arry_D[i] + "</span></label><br>";
    $(".item_area").html(now_html + add_html);
    console.log("num");
  }
  console.log("All END");
})

$(Document).on("change", "input", function(){
  const detect = $(this).prop("checked");
  const text = $(this).parent().prop("outerHTML").replace(/.*\<span\>(.*)\<\/span\>.*/, "$1");
  if(detect == false){
    const html = $(".hide_item_area").html().replaceAll(text + "<br>", "");
    $(".hide_item_area").html(html);
  }else{
    $(".hide_item_area").append("<br>" + text);
  }
})

$(".exe_button").on("click", function(){
  const split = $(".hide_item_area").html().split("<br>")
  const length = split.length;
  $(".result, .slot").html("");
  const num = Number($(".slot_num").val());
  for(let i = 0; i < num; i++){
    const num = Math.floor(Math.random() * (length - 1)) + 1;
    console.log(num, split[num]);
    const html = "<div><span>" + split[num] + "</span></div>";
    $(".slot").append(html);
  }
  for(let i = 0; i < (10 - num); i++){
    $(".slot").append("<div></div>");
  }
  $(".result").html($(".slot").html());
})

$(".slot_num").on("keyup", function(){
  const num = Number($(this).val());
  if(num > 10){
    $(this).val(10);
  }else if(num < 0){
    $(this).val(0);
  }
})