const TEXT_COLOR = 'white--text';
// const COLOR_TEAL_CLASS_2 = 'blue lighten-2';
const BUTON_TEXT = 'VIEW';
const COLOR_DEF = 'blue lighten-2'
const COLOR_MST = 'green lighten-2'
const COLOR_FILE = "indigo lighten-2"
const COLOR_WORK = "deep-orange lighten-2"
const COLOR_WORK_LESS = 'teal lighten-2'

const _card_data = {
  item_list: {
    title: "部材",
    class_text: COLOR_MST,
    color: TEXT_COLOR,
    text: '部材・図面一覧リスト',
    details: ["部材の検索、残数、工事割当数、手配・受入済み数量の確認ができます"].join(""),
    links: "/data_table",
    button: false,
    button_text: BUTON_TEXT
  },
  equipStartCheck: {
    title: "点検",
    class_text: COLOR_DEF,
    color: TEXT_COLOR,
    text: "工具・設備の始業時点検",
    details: [
      "手配した工事を元に受入処理を行えます。",
      "対象の手配工事を選択すると手配一覧リストが表示されます。",
      "表示されたリストより受け入れる部材をチェックし、",
      "画面下部の受入ボタンを押下してください。",
      "受入数量の変更がある場合は、リスト右部の編集コマンドを押してください。"
    ].join(""),
    links: "/work",
    button: false,
    button_text: BUTON_TEXT,
    contents: [
      {
        id: "kokuin",
        name: "刻印機",
        text: "刻印機使用時に確認を行う"
      }
    ]
  },
  petition: {
    title: "申請",
    class_text: COLOR_DEF,
    color: TEXT_COLOR,
    text: "休暇・残業・etcの申請を行う",
    details: [
    ].join(""),
    links: "",
    button: false,
    button_text: BUTON_TEXT
  },
  inventory: {
    title: "棚卸し",
    class_text: COLOR_WORK_LESS,
    color: TEXT_COLOR,
    text: "部材・その他・工事・履歴",
    details: [
    ].join(""),
    links: "",
    button: false,
    button_text: BUTON_TEXT
  },
  readfile: {
    title: "読取",
    class_text: COLOR_FILE,
    color: TEXT_COLOR,
    text: ["TSデータ（CSV形式）"],
    details: ["ファイル読み込み"].join(""),
    links: "",
    button: false,
    button_text: BUTON_TEXT
  },
  model_mst: {
    title: "形式",
    class_text: COLOR_MST,
    color: TEXT_COLOR,
    text: ["形式リスト・構成データ更新・部材登録・手配・点検・確認"],
    details: [""].join(""),
    links: "",
    button: false,
  },
  recept_list: {
    title: "受注",
    class_text: COLOR_WORK_LESS,
    color: TEXT_COLOR,
    text: ["注残・製造データ作成"],
    details: [""].join(""),
    links: "",
    button: false,
    button_text: BUTON_TEXT
  },
  product_list: {
    title: "製造データ",
    class_text: COLOR_WORK_LESS,
    color: TEXT_COLOR,
    text: ["手配・起工・納品"],
    details: [""].join(""),
    links: "",
    button: false,
    button_text: BUTON_TEXT
  },
  user_info: {
    title: "作業者情報",
    class_text: COLOR_DEF,
    color: TEXT_COLOR,
    text: ["作業者情報更新"],
    details: [""].join(""),
    links: "",
    button: false,
    button_text: BUTON_TEXT
  },
  ['ukeire/const_select']: {
    title: "受入",
    class_text: COLOR_WORK_LESS,
    color: TEXT_COLOR,
    text: ["発注部材受け入れ"],
    details: [""].join(""),
    links: "",
    button: false,
    button_text: BUTON_TEXT
  },
  work: {
    title: "制作",
    class_text: COLOR_DEF,
    color: TEXT_COLOR,
    text: ["工事リスト・工程管理表・作業データ登録"],
    details: [""].join(""),
    links: "",
    button: false,
    button_text: BUTON_TEXT
  },
  tehaisaki: {
    title: "手配先",
    class_text: COLOR_WORK_LESS,
    color: TEXT_COLOR,
    text: ["統合・登録・削除・更新"],
    details: [""].join(""),
    links: "",
    button: false,
    button_text: BUTON_TEXT
  }
}

export default {
  data() {
    return {
      card_data: _card_data,
    }
  }
}
