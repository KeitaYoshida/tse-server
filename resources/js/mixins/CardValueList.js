const TEXT_COLOR = 'white--text';
// const COLOR_TEAL_CLASS_2 = 'blue lighten-2';
const BUTON_TEXT = 'VIEW';
const COLOR_DEF = 'blue lighten-2'

const _card_data = {
  item_list: {
    title: "部材リスト",
    class_text: COLOR_DEF,
    color: TEXT_COLOR,
    text: '部材リストの一覧を表示',
    details: ["部材の検索、残数、工事割当数、手配・受入済み数量の確認ができます"].join(""),
    links: "/data_table",
    button: false,
    button_text: BUTON_TEXT
  },
  equipStartCheck: {
    title: "始業時点検",
    class_text: COLOR_DEF,
    color: TEXT_COLOR,
    text: "各種工具・治工具・設備の始業時点検内容を登録する",
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
    title: "各種申請",
    class_text: COLOR_DEF,
    color: TEXT_COLOR,
    text: "休暇・残業・etcの申請を行う",
    details: [
    ].join(""),
    links: "",
    button: false,
    button_text: BUTON_TEXT
  },
  marshalling: {
    title: "マーシャリング",
    class_text: COLOR_DEF,
    color: TEXT_COLOR,
    text: "部材のマーシャリングを行う",
    details: [
      "手配した工事を元にマーシャリング処理を行えます。",
      "対象の手配工事を選択すると手配一覧リストが表示されます。",
      "表示されたリストよりマーシャリングする部材をチェックし、",
      "画面下部の決定ボタンを押下してください。",
      "受入数量の変更がある場合は、リスト右部の編集コマンドを押してください。"
    ].join(""),
    links: "/data_table",
    button: false,
    button_text: BUTON_TEXT
  },
  aggregate_const: {
    title: "集計 - 工事",
    class_text: COLOR_DEF,
    color: TEXT_COLOR,
    text: ["棚卸等の集計作業を行う", "（工事）"],
    details: ["部材の検索、残数、工事割当数、手配・受入済み数量の確認ができます"].join(""),
    links: "/data_table",
    button: false,
    button_text: BUTON_TEXT
  },
  aggregate_etc: {
    title: "集計 - その他・残物品",
    class_text: COLOR_DEF,
    color: TEXT_COLOR,
    text: ["棚卸等の集計作業を行う", "（その他・残物品）"],
    details: ["部材の検索、残数、工事割当数、手配・受入済み数量の確認ができます"].join(""),
    links: "/data_table",
    button: false,
    button_text: BUTON_TEXT
  },
  video_test: {
    title: "video test",
    class_text: COLOR_DEF,
    color: TEXT_COLOR,
    text: ["棚卸等の集計作業を行う", "（その他・残物品）"],
    details: ["部材の検索、残数、工事割当数、手配・受入済み数量の確認ができます"].join(""),
    links: "",
    button: false,
    button_text: BUTON_TEXT
  },
  make_qr: {
    title: "make qr",
    class_text: COLOR_DEF,
    color: TEXT_COLOR,
    text: ["make qr code"],
    details: ["make qr and print qr list pdf"].join(""),
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
