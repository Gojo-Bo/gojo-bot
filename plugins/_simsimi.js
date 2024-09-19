function _0x5b94(_0x439157, _0x195db8) {
  const _0x5b94b5 = _0x195d();
  _0x5b94 = function (_0x211e9a, _0x5266a5) {
      _0x211e9a = _0x211e9a - 0x0;
      let _0x122db0 = _0x5b94b5[_0x211e9a];
      return _0x122db0;
  };
  return _0x5b94(_0x439157, _0x195db8);
}

(function (_0x2b9bda, _0x34113e) {
  const _0x4db50b = _0x5b94;
  const _0x5254ba = _0x2b9bda();
  while (!![]) {
      try {
          const _0x3f3abf = parseInt(_0x4db50b(0x15)) / 0x1
              + -parseInt(_0x4db50b(0x1a)) / 0x2
              + parseInt(_0x4db50b(0x0)) / 0x3 * (-parseInt(_0x4db50b(0x18)) / 0x4)
              + -parseInt(_0x4db50b(0xd)) / 0x5 * (parseInt(_0x4db50b(0x3)) / 0x6)
              + parseInt(_0x4db50b(0x1d)) / 0x7
              + parseInt(_0x4db50b(0xb)) / 0x8
              + parseInt(_0x4db50b(0x9)) / 0x9 * (parseInt(_0x4db50b(0x13)) / 0xa);

          if (_0x3f3abf === _0x34113e) {
              break;
          } else {
              _0x5254ba['push'](_0x5254ba['shift']());
          }
      } catch (_0x1382a9) {
          _0x5254ba['push'](_0x5254ba['shift']());
      }
  }
}(_0x195d, 0xddf73));

import _0x3f611b from 'node-fetch';

const handler = _0x34e1be => _0x34e1be;

function _0x195d() {
  const _0x380c87 = [
      '2993472iHUOIk',
      'text',
      '5905sUkzSL',
      'chats',
      '&msg=',
      'Hello',
      'HELLO',
      'json',
      '1371490EkyBUi',
      'includes',
      '724263vzMiim',
      'هاي',
      'data',
      '4MhTOzg',
      'https://translate.googleapis.com/translate_a/single?client=gtk&sl=auto&tl=es&dt=t&q=',
      '1973676oDPVtH',
      'simi',
      'chat',
      '10352923xHRbxC',
      'https://api.simsimi.net/v2/?text=',
      '4074549RcIolO',
      'https://translate.googleapis.com/translate_a/single?client=gtk&sl=auto&tl=en&dt=t&q=',
      'cnt',
      '2136NcOsaI',
      'اهلا',
      'reply',
      'No sé lo que quieres decir. Por favor, favor ensename. Para favor enseñame.',
      'replac',
      '72ViUCwQ',
      'pushName'
  ];
  _0x195d = function () {
      return _0x380c87;
  };
  return _0x195d();
}

handler['before'] = async _0x134797 => {
  const _0x46d100 = _0x5b94;
  const _0x1c0499 = global['db'][_0x46d100(0x17)]['control'][_0x134797[_0x46d100(0x1c)]];

  if (_0x1c0499[_0x46d100(0x1b)]) {
      if (/^.*false|disnable|(turn)?off|0/i['test'](_0x134797[_0x46d100(0xc)]))
          return;

      let _0xfa8511 = _0x134797[_0x46d100(0xc)];

      try {
          const _0x12eb56 = await _0x3f611b(_0x46d100(0x1e) + encodeURIComponent(_0xfa8511) + '&lc=ar');
          const _0x393c3d = await _0x12eb56['json']();

          if (_0x393c3d['success'] === _0x46d100(0x6))
              return _0x134797[_0x46d100(0x5)]('' + lol);

          await _0x134797[_0x46d100(0x5)](_0x393c3d['success']);
      } catch {
          if (_0xfa8511[_0x46d100(0x14)](_0x46d100(0x4)))
              _0xfa8511 = _0xfa8511[_0x46d100(0x7)](_0x46d100(0x4), _0x46d100(0x10));
          if (_0xfa8511[_0x46d100(0x14)](_0x46d100(0x4)))
              _0xfa8511 = _0xfa8511[_0x46d100(0x7)](_0x46d100(0x4), _0x46d100(0x8));
          if (_0xfa8511[_0x46d100(0x14)]('هاي'))
              _0xfa8511 = _0xfa8511[_0x46d100(0x7)](_0x46d100(0x16), _0x46d100(0x11));

          const _0x5f4560 = await _0x3f611b(_0x46d100(0x1) + _0xfa8511);
          const _0x2b1f77 = await _0x5f4560['text']();
          const _0x1d373d = _0x134797[_0x46d100(0xa)] || '1';
          const _0x38137a = await _0x3f611b('https://api.brinshop.ai/get?bid=15386&key=rcKonOgrUFmn5usX&uid=' + _0x1d373d + '&did=t' + _0x2b1f77[0x0][0x0][0x0]);
          const _0x11987f = await _0x38137a['text']();
          const _0x238b54 = await _0x3f611b(_0x46d100(0x19) + _0x11987f[_0x46d100(0x2)]);
          const _0x323531 = await _0x238b54['text']();
          await _0x134797[_0x46d100(0x5)](_0x323531[0x0][0x0][0x0]);
      }
      return !0x0;
  }
  return !![];
};

export default handler;
