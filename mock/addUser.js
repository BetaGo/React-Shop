const User = require('../models/user');

const admin = new User({
  user_id: 1,
  user_name: 'admin',
  password: 'admin',
});

admin.save(function(err, admin) {
  if (err) {
    console.log(`错误： ${err}`);
  }

  console.log(`添加用户：${admin.user_name} 成功！`);
});