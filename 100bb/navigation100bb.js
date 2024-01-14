const navEMTT = [
  {link:'../../EasyMTT/RFI/RFIUTG.html', caption:'RFI'},
  {link:'../../EasyMTT/CC3bet/CC3bUTG.html', caption:'Cold Call or 3-bet'},
  {link:'../../EasyMTT/DefBB/DefBBvsUTG.html', caption:'BB defence'}
]

const navHMTT = [
  {link:'../../HardMTT/RFI/Up36bb/Up36UTG.html', caption:'RFI 36bb+'},
  {link:'../../HardMTT/RFI/16-35bb/16-35bbUTG.html', caption:'RFI 16-35bb'},
  {link:'../../HardMTT/CC3bet/Up26bb/CC3betUp26bbUTG.html', caption:'CC/3bet 26bb+'},
  {link:'../../HardMTT/CC3bet/16-35bb/CC3bet16-25bbUTG.html', caption:'CC/3bet 16-25bb'},
  {link:'../../HardMTT/PushFold/PF-UTG.html', caption:'PUSH/FOLD'},
  {link:'../../HardMTT/ISO/IsolateUTGMP.html', caption:'ISOLATE'},
  {link:'../../HardMTT/SQUEEZE/SqueezeSBBBvsUTG.html', caption:'SQUEEZE'},
  {link:'../../HardMTT/DefBB/BB/DefBBvsUTG.html', caption:'Defebce BB'},
  {link:'../../HardMTT/DefBB/3betPush16-25bb/DefBB3betPUSH1625bbBBvsUTG.html', caption:'BB 3bet PUSH 16-25bb'}
]

document.getElementById(navBlockName).appendChild(createNav(nav100bb, '100bb+'));
document.getElementById(navBlockName).appendChild(createNav(navEMTT, 'Easy MTT'));
document.getElementById(navBlockName).appendChild(createNav(navHMTT, 'Hard MTT'));