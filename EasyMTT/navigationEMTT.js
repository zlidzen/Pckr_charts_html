const nav100bb = [
  {link:'../../100bb/Open/100bbOpenUTG.html', caption:'Open', isActive:false},
  {link:'../../100bb/CallAnd3bet/100bbC3betUTG.html', caption:'Call and 3-bet', isActive:false},
  {link:'../../100bb/DefBB/100bbDefBBvsUTG.html', caption:'BB defence', isActive:false}
]

const navHMTT = [
  {link:'../../HardMTT/RFI/Up36bb/Up36UTG.html', caption:'RFI 36bb+', isActive:false},
  {link:'../../HardMTT/RFI/16-35bb/16-35bbUTG.html', caption:'RFI 16-35bb', isActive:false},
  {link:'../../HardMTT/CC3bet/Up26bb/CC3betUp26bbUTG.html', caption:'CC/3bet 26bb+', isActive:false},
  {link:'../../HardMTT/CC3bet/16-35bb/CC3bet16-25bbUTG.html', caption:'CC/3bet 16-25bb', isActive:false},
  {link:'../../HardMTT/PushFold/PF-UTG.html', caption:'PUSH/FOLD', isActive:false},
  {link:'../../HardMTT/ISO/IsolateUTGMP.html', caption:'ISOLATE', isActive:false},
  {link:'../../HardMTT/SQUEEZE/SqueezeSBBBvsUTG.html', caption:'SQUEEZE', isActive:false},
  {link:'../../HardMTT/DefBB/BB/DefBBvsUTG.html', caption:'Defebce BB', isActive:false},
  {link:'../../HardMTT/DefBB/3betPush16-25bb/DefBB3betPUSH1625bbBBvsUTG.html', caption:'BB 3bet PUSH 16-25bb', isActive:false}
]

document.getElementById(navBlockName).appendChild(createNav(nav100bb, '100bb+'));
document.getElementById(navBlockName).appendChild(createNav(navEMTT, 'EasyMTT'));
document.getElementById(navBlockName).appendChild(createNav(navHMTT, 'HardMTT'));