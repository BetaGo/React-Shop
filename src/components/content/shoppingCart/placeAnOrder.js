import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import RaisedButton from 'material-ui/RaisedButton';
// import areIntlLocalesSupported from 'intl-locales-supported';
// import persianUtils from 'material-ui-persian-date-picker-utils';

// let DateTimeFormat;

// /**
//  * Use the native Intl.DateTimeFormat if available, or a polyfill if not.
//  */
// if (areIntlLocalesSupported(['fr', 'fa-IR'])) {
//   DateTimeFormat = global.Intl.DateTimeFormat;
// } else {
//   const IntlPolyfill = require('intl');
//   DateTimeFormat = IntlPolyfill.DateTimeFormat;
//   require('intl/locale-data/jsonp/fr');
//   require('intl/locale-data/jsonp/fa-IR');
// }


class PlaceAnOrder extends Component {
  render() {
    return (
      <div>
        <DatePicker
          DateTimeFormat={global.Intl.DateTimeFormat}
          floatingLabelText="选择取货日期"
          hintText="选择取货日期"
          okLabel="确定"
          cancelLabel="取消"
          locale="zh-CN"
        />

        <TimePicker
          floatingLabelText="选择取货时间"
          hintText="选择取货时间"
          okLabel="确定"
          cancelLabel="取消"
        />
        <RaisedButton label="删除" secondary={true} />
        <RaisedButton label="确认预定" primary={true} />
      </div>
    );
  }
}

export default PlaceAnOrder;