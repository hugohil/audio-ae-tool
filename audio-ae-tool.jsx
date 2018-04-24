var layer = app.project.activeItem.layer(1);

var lastvalue = 0;
for (var i = 0; i < (datas.length - 1); i += 2) {
  var value = Math.abs((datas[i] * 2000 + 100));
  if (Math.abs(value - lastvalue) > 5) {
    layer.effect(1).speed.setValueAtTime((i / 24), value);
  }
  lastvalue = value;
}
