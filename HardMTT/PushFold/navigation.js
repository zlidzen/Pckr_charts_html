function liGray(val){
  var li = document.createElement('li');
  li.setAttribute('class','gray_color');
  li.innerText += val;

  return li;
}

function liLink(link, val){
  var a = document.createElement('a');
  a.setAttribute('href', link);
  a.innerText += val;
  var li = document.createElement('li');
  li.appendChild(a);

  return li;
}

function createNav100bb(){
  var ul = document.createElement('ul');
  ul.appendChild(liLink('../../100bb/Open/100bbOpenUTG.html','Open'));
  ul.appendChild(liLink('../../100bb/CallAnd3bet/100bbC3betUTG.html','Call and 3-bet'));
  ul.appendChild(liLink('../../100bb/DefBB/100bbDefBBvsUTG.html','BB defence'));

  var nav = document.createElement('div');
  nav.innerText += '100bb+';
  nav.appendChild(ul);

  return nav;
}

function createNavEMTT(){
  var ul = document.createElement('ul');
  ul.appendChild(liLink('../../EasyMTT/RFI/RFIUTG.html','RFI'));
  ul.appendChild(liLink('../../EasyMTT/CC3bet/CC3bUTG.html','Cold Call or 3-bet'));
  ul.appendChild(liLink('../../EasyMTT/DefBB/DefBBvsUTG.html','BB defence'));

  var nav = document.createElement('div');
  nav.innerText += 'EasyMTT';
  nav.appendChild(ul);

  return nav;
}

function createNavHardMTT(){
  var ul = document.createElement('ul');

  ul.appendChild(liLink('../RFI/Up36bb/Up36UTG.html','RFI 36bb+'));
  ul.appendChild(liLink('../RFI/16-35bb/16-35bbUTG.html','RFI 16-35bb'));
  ul.appendChild(liLink('../CC3bet/Up26bb/CC3betUp26bbUTG.html','CC/3bet 26bb+'));
  ul.appendChild(liLink('../CC3bet/16-35bb/CC3bet16-25bbUTG.html','CC/3bet 16-25bb'));
  ul.appendChild(liGray('PUSH/FOLD'));
  ul.appendChild(liLink('../ISO/IsolateUTGMP.html','ISOLATE'));
  ul.appendChild(liLink('../SQUEEZE/SqueezeSBBBvsUTG.html','SQUEEZE'));
  ul.appendChild(liLink('../DefBB/BB/DefBBvsUTG.html','Defebce BB'));
  ul.appendChild(liLink('../DefBB/3betPush16-25bb/DefBB3betPUSH1625bbBBvsUTG.html','BB 3bet PUSH 16-25bb'));

  var nav = document.createElement('div');
  nav.innerText += 'HardMTT';
  nav.appendChild(ul);

  return nav;
}

document.getElementById('prev_action').appendChild(createNav100bb());
document.getElementById('prev_action').appendChild(createNavEMTT());
document.getElementById('prev_action').appendChild(createNavHardMTT());