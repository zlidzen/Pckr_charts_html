// common logic
const rowA = ['AA','AKs','AQs','AJs','ATs','A9s','A8s','A7s','A6s','A5s','A4s','A3s','A2s'];
const rowK = ['AKo','KK','KQs','KJs','KTs','K9s','K8s','K7s','K6s','K5s','K4s','K3s','K2s'];
const rowQ = ['AQo','KQo','QQ','QJs','QTs','Q9s','Q8s','Q7s','Q6s','Q5s','Q4s','Q3s','Q2s'];
const rowJ = ['AJo','KJo','QJo','JJ','JTs','J9s','J8s','J7s','J6s','J5s','J4s','J3s','J2s'];
const rowT = ['ATo','KTo','QTo','JTo','TT','T9s','T8s','T7s','T6s','T5s','T4s','T3s','T2s'];
const row9 = ['A9o','K9o','Q9o','J9o','T9o','99','98s','97s','96s','95s','94s','93s','92s'];
const row8 = ['A8o','K8o','Q8o','J8o','T8o','98o','88','87s','86s','85s','84s','83s','82s'];
const row7 = ['A7o','K7o','Q7o','J7o','T7o','97o','87o','77','76s','75s','74s','73s','72s'];
const row6 = ['A6o','K6o','Q6o','J6o','T6o','96o','86o','76o','66','65s','64s','63s','62s'];
const row5 = ['A5o','K5o','Q5o','J5o','T5o','95o','85o','75o','65o','55','54s','53s','52s'];
const row4 = ['A4o','K4o','Q4o','J4o','T4o','94o','84o','74o','64o','54o','44','43s','42s'];
const row3 = ['A3o','K3o','Q3o','J3o','T3o','93o','83o','73o','63o','53o','43o','33','32s'];
const row2 = ['A2o','K2o','Q2o','J2o','T2o','92o','82o','72o','62o','52o','42o','32o','22'];

const rows = [rowA, rowK, rowQ, rowJ, rowT, row9, row8, row7, row6, row5, row4, row3, row2];

const navBlockName = 'prev_action';
const postActions = 'post_action';
const positionBlock = 'position';

//colors
const green_color = "#20d62c";
const gray_color = "#bababa";
const blue_color = "#00b1e2";
const yellow_color = "#f2ad00";
const red_color = "#e20000";
const lemon_color = "#e6f700";
const purple_color = "#f200ee";

function addChart(){
  var chartEl = document.getElementById('chart');
  if (!chartEl) return;

  var table = document.createElement('table');
  table.setAttribute("class", "table table-bordered");

  var tableBody = document.createElement('tbody');

  rows.forEach(
    (r) => {tableBody.appendChild(buildRow(r));}
  );

  table.appendChild(tableBody);
  chartEl.appendChild(table);
}

function buildRow(values){
  var row = document.createElement('tr');
  values.forEach(
    (el) => {
      var col = document.createElement('td');
      col.setAttribute('id', el);
      col.innerText += el;
      row.appendChild(col);
    });
    return row;
}

function paint_ids(list, color){
  list.forEach((el)=>{
    document.getElementById(el).setAttribute('class', color);
  });
}

function liGray(val){
  let li = document.createElement('li');
  li.setAttribute('class','gray_color');
  li.innerText += val;

  return li;
}

function liLink(link, val){
  let a = document.createElement('a');
  a.setAttribute('href', link);
  a.innerText += val;
  let li = document.createElement('li');
  li.appendChild(a);

  return li;
}

function createNav(navLinksArray, navName){
  var ul = document.createElement('ul');

  navLinksArray.forEach(
    (navLink) => {
      if (navLink.link === null) {
        ul.appendChild(liGray(navLink.caption));
      } else {
        ul.appendChild(liLink(navLink.link, navLink.caption));
      }}
  );
  
  var nav = document.createElement('div');
  nav.innerText += navName;
  nav.appendChild(ul);

  return nav;
}

function createPostActions(dict){
  var postEl = document.getElementById(postActions);

  for (var key in dict){
    var action = document.createElement('a');
    action.setAttribute("class", "btn");
    action.setAttribute("style", "background-color:" + key + ";");
    action.setAttribute("role", "button");
    action.innerText += dict[key];
    postEl.appendChild(action);
  }
}

function createPositionBlock(dict){
  var posEl = document.getElementById(positionBlock);

  for (var key in dict) {
    var pos = document.createElement('a');
    if (key === '#') {
      pos.setAttribute("class", "btn btn-success");
    } else {
      pos.setAttribute("class", "btn btn-outline-success");
    }
    pos.setAttribute("role", "button");
    pos.setAttribute("href", key);
    pos.innerText += dict[key];
    posEl.appendChild(pos);
  }
}

function paint_ids_n(list, color){
  list.forEach((el)=>{
    document.getElementById(el).setAttribute('style', 'background-color:'+ color);
  });
}