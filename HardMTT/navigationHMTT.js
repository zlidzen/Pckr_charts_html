const nav100bb = [
  {link:dip + '../100bb/Open/100bbOpenUTG.html', caption:'Open'},
  {link:dip + '../100bb/CallAnd3bet/100bbC3betUTG.html', caption:'Call and 3-bet'},
  {link:dip + '../100bb/DefBB/100bbDefBBvsUTG.html', caption:'BB defence'}
]

const navEMTT = [
  {link:dip + '../EasyMTT/RFI/RFIUTG.html', caption:'RFI'},
  {link:dip + '../EasyMTT/CC3bet/CC3bUTG.html', caption:'Cold Call or 3-bet'},
  {link:dip + '../EasyMTT/DefBB/DefBBvsUTG.html', caption:'BB defence'}
]

document.getElementById(navBlockName).appendChild(createNav(nav100bb, '100bb+'));
document.getElementById(navBlockName).appendChild(createNav(navEMTT, 'EasyMTT'));
document.getElementById(navBlockName).appendChild(createNav(navHMTT, 'HardMTT'));