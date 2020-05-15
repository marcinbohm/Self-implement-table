window.addEventListener('load', function() {

    var tblplace = document.getElementById('tableplace');
    var btn = document.getElementById('btn');
    var content = document.getElementById('content');
    content.style.textAlign = "center";

    if(btn){
        btn.addEventListener('click', function() {
            var number = window.prompt("Type a number lower than 7", "");
            var info;
            if (number == null || number == "" || isNaN(number) || number > 6) {
                info = "You have cancelled the prompt, didn't enter a number or entered number was higher than 8";
                alert(info);
              } else {
                btn.style.visibility = "hidden";
                var info2 = document.createElement('p');
                info2.innerHTML = "Each text block is cell value in your table row"
                content.appendChild(info2);
                for(var i = 0; i < number; i++) {
                    var txtel = document.createElement('input');
                    txtel.setAttribute('type', 'text');
                    txtel.setAttribute('id', 'textarea'+ i)
                    txtel.style.marginRight = "10px";
                    txtel.style.marginTop = "10px"
                    content.appendChild(txtel);
                }
                var br = document.createElement('br');
                var br2 = document.createElement('br');
                var tblbtn = document.createElement('button');
                var prbtn = document.createElement('button');
                var chckbx = document.createElement('input');
                var chckbxtxt = document.createElement('label');
                var chckbx2 = document.createElement('input');
                var chckbxtxt2 = document.createElement('label');
                chckbx.setAttribute('type', 'checkbox');
                chckbx.setAttribute('id', 'bold');
                chckbxtxt.setAttribute('for', 'bold');
                chckbxtxt.innerHTML = "Bold font"
                chckbxtxt.style.margin = "5px";
                chckbx2.setAttribute('type', 'checkbox');
                chckbx2.setAttribute('id', 'diffcolor');
                chckbxtxt2.setAttribute('for', 'diffcolor');
                chckbxtxt2.innerHTML = "Other row color"
                chckbxtxt2.style.margin = "5px";
                tblbtn.innerHTML = "Create row";
                tblbtn.style.width = "150px";
                tblbtn.style.height = "30px";
                tblbtn.style.marginTop = "20px";
                tblbtn.style.cursor = "pointer";
                tblbtn.style.background = "rgb(90, 90, 90)";
                tblbtn.style.border = "1px solid black";
                prbtn.innerHTML = "Print your table";
                prbtn.style.width = "150px";
                prbtn.style.height = "30px";
                prbtn.style.marginTop = "20px";
                prbtn.style.cursor = "pointer";
                prbtn.style.background = "rgb(90, 90, 90)";
                prbtn.style.border = "1px solid black";
                
                content.appendChild(br2);
                content.appendChild(chckbx);
                content.appendChild(chckbxtxt);
                content.appendChild(chckbx2);
                content.appendChild(chckbxtxt2);
                content.appendChild(br);
                content.appendChild(tblbtn);
                content.appendChild(prbtn);
              }
            
              var table = document.createElement('table');
              var tableBody = document.createElement('tbody');
              table.setAttribute('class', 'table table-bordered');

              if(tblbtn){
                tblbtn.addEventListener('click', function() {
                    
                    
                    var row = document.createElement('tr');
        
                    for(var i = 0; i < number; i++){
                        var cell = document.createElement('td');
                        var cellNode = document.createTextNode(document.getElementById('textarea' + i).value);
                        cell.appendChild(cellNode);
                        row.appendChild(cell);
                        cell.style.border = "1px solid black";
                        cell.style.color = "black";

                        if(document.getElementById('bold').checked) {
                            cell.style.fontWeight = "800";
                        } else {
                            cell.style.fontWeight = "300";
                        }

                        if(document.getElementById('diffcolor').checked) {
                            cell.style.backgroundColor = "rgb(153, 115, 0)";
                        } else {
                            cell.style.backgroundColor = "rgb(71, 71, 107)";
                        }
                    }
                    tableBody.appendChild(row);
                    table.appendChild(tableBody);
                    tblplace.appendChild(table);
                    for(var j = 0; j < number; j++){
                        document.getElementById('textarea' + j).value = "";
                    }

                    
                })

                if(prbtn) {
                    prbtn.addEventListener('click', function () {
                        var mywindow = window.open('', 'PRINT', 'height=400,width=600');
            
                        mywindow.document.write('<html><head>');
                        mywindow.document.write('</head><body >');
                        mywindow.document.write('<h1>' + document.title  + '</h1>');
                        mywindow.document.write(document.getElementById('tableplace').innerHTML);
                        mywindow.document.write('</body></html>');
            
                        mywindow.document.close(); // necessary for IE >= 10
                        mywindow.focus(); // necessary for IE >= 10*/
            
                        mywindow.print();
                        mywindow.close();
            
                        return true;
                    })
                }
            }
        })
    }
}, false);