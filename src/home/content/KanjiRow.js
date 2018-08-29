import React, { Component, PropTypes } from 'react';

class KanjiRow extends Component {

  render() {
    return (
      <div className="kanji-row" data-character="分">
        <dl className="kanji-data">
          <dt className="kanji-term">Ý nghĩa:</dt>
          <dd className="kanji-definition kanji-meaning">part, minute of time, segment, understand</dd>

          <dt className="kanji-term">Onyomi:</dt>
          <dd className="kanji-definition kanji-onyomi">ブン フン ブ</dd>

          <dt className="kanji-term">Kunyomi:</dt>
          <dd className="kanji-definition kanji-kunyomi"> わ.ける、 わ.け、 わ.かれる、 わ.かる、 わ.かつ</dd>
        </dl>
        <div className="kanji-box kanji-character">分</div>
        <div className="kanji-box kanji-character">分</div>
        <div className="kanji-box kanji-character">分</div>
        <div className="kanji-box"></div>
        <div className="kanji-box"></div>
        <div className="kanji-box"></div>
        <div className="kanji-box"></div>
        <div className="kanji-box"></div>
        <div className="kanji-box"></div>
        <div className="kanji-box"></div>
        <div className="kanji-box"></div>
        <div className="kanji-box"></div>
        <div className="kanji-box"></div>
        <div className="kanji-box"></div>
        <div className="kanji-box"></div>
        <div className="kanji-box"></div>
        <div className="kanji-box"></div>
        <div className="kanji-box"></div>
      </div>
    );
  }
}

export default KanjiRow;