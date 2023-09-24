// common logic
let rowA = ['AA','AKs','AQs','AJs','ATs','A9s','A8s','A7s','A6s','A5s','A4s','A3s','A2s'];
let rowK = ['AKo','KK','KQs','KJs','KTs','K9s','K8s','K7s','K6s','K5s','K4s','K3s','K2s'];
let rowQ = ['AQo','KQo','QQ','QJs','QTs','Q9s','Q8s','Q7s','Q6s','Q5s','Q4s','Q3s','Q2s'];
let rowJ = ['AJo','KJo','QJo','JJ','JTs','J9s','J8s','J7s','J6s','J5s','J4s','J3s','J2s'];
let rowT = ['ATo','KTo','QTo','JTo','TT','T9s','T8s','T7s','T6s','T5s','T4s','T3s','T2s'];
let row9 = ['A9o','K9o','Q9o','J9o','T9o','99','98s','97s','96s','95s','94s','93s','92s'];
let row8 = ['A8o','K8o','Q8o','J8o','T8o','98o','88','87s','86s','85s','84s','83s','82s'];
let row7 = ['A7o','K7o','Q7o','J7o','T7o','97o','87o','77','76s','75s','74s','73s','72s'];
let row6 = ['A6o','K6o','Q6o','J6o','T6o','96o','86o','76o','66','65s','64s','63s','62s'];
let row5 = ['A5o','K5o','Q5o','J5o','T5o','95o','85o','75o','65o','55','54s','53s','52s'];
let row4 = ['A4o','K4o','Q4o','J4o','T4o','94o','84o','74o','64o','54o','44','43s','42s'];
let row3 = ['A3o','K3o','Q3o','J3o','T3o','93o','83o','73o','63o','53o','43o','33','32s'];
let row2 = ['A2o','K2o','Q2o','J2o','T2o','92o','82o','72o','62o','52o','42o','32o','22'];

function addChart(){
  var chartEl = document.getElementById('chart')
  if (!chartEl) return;
  
  var table = document.createElement('table');
  
  table.appendChild(buildRow(rowA));
  table.appendChild(buildRow(rowK));
  table.appendChild(buildRow(rowQ));
  table.appendChild(buildRow(rowJ));
  table.appendChild(buildRow(rowT));
  table.appendChild(buildRow(row9));
  table.appendChild(buildRow(row8));
  table.appendChild(buildRow(row7));
  table.appendChild(buildRow(row6));
  table.appendChild(buildRow(row5));
  table.appendChild(buildRow(row4));
  table.appendChild(buildRow(row3));
  table.appendChild(buildRow(row2));
  
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