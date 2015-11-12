/* creating dynamictable using javascript and applying sorting, paging and filtering*/
function addTable(){
                      var tableDiv = document.getElementById('dynamictable');
                      var table = document.createElement('table');
                      table.border = 1;
                      var tr = document.createElement('tr');
                      var td1 = document.createElement('td');
                      td1.innerHTML = "Empid";
                      tr.appendChild(td1);
                      var td2 = document.createElement('td');
                      td2.innerHTML = "EmpName";
                      tr.appendChild(td2);
                      var td3 = document.createElement('td');
                      td3.innerHTML = "salary"
                      tr.appendChild(td3);
                      var td4 = document.createElement('td');
                      td4.innerHTML = "ContactNo";
                      tr.appendChild(td4);
                      var td5 = document.createElement('td');
                      td5.innerHTML = "Address";
                      tr.appendChild(td5);
                      table.appendChild(tr);
                      tableDiv.appendChild(table);

                   }
/* adding data to table*/
function addData(){
                    var tableDiv = document.getElementById('datatable');
                    var table = document.getElementById('dattable');
                    table.border = 1;
                    var tr1 = document.createElement('tr');
                    var count = table.rows.length;
                    var no = document.getElementById('empno').value;
                    var name = document.getElementById('empname').value;
                    var sal = document.getElementById('salary').value;
                    var mno = document.getElementById('contactno').value;
                    var addrs = document.getElementById('address').value;
                    /* clearing data in elements */
                    document.getElementById('empno').value = "";
                    document.getElementById('empname').value = "";
                    document.getElementById('salary').value = "";
                    document.getElementById('contactno').value = "";
                    document.getElementById('address').value = "";
                    if(count == 0)
                    {
                      alert("table does not existed");
                    }
                    else
                    {
                      if((no == "")||(name == "")||(sal == "")||(mno == "")||(addrs ==""))
                      {
                        alert("enter the data");
                      }
                      else
                      {
                        var t1 = document.createElement('td');
                        t1.innerHTML = no;
                        tr1.appendChild(t1);
                        var t2 = document.createElement('td');
                        t2.innerHTML = name;
                        tr1.appendChild(t2);
                        var t3 = document.createElement('td');
                        t3.innerHTML = sal;
                        tr1.appendChild(t3);
                        var t4 = document.createElement('td');
                        t4.innerHTML =  mno;
                        tr1.appendChild(t4);
                        var t5 = document.createElement('td');
                        t5.innerHTML = addrs;
                        tr1.appendChild(t5);
                        table.appendChild(tr1);
                        tableDiv.appendChild(table);
                      }
                    }
                  }
/*deleting a row in table)*/
function deleteRowr(){
                        var table = document.getElementById('dattable');
                        var count = table.rows.length;
                        var row = document.getElementById('deleterow').value;
                        var r = row;
                          r = row + 1;
                          document.getElementById('deleterow').value = "";
                        if(row == "")
                        {
                          alert("the given no. row is not presented in table");
                        }
                        else
                        {
                          if((count == 0)||(count == 1))
                          {
                            alert("there is no rows in table to delete")
                          }
                          else
                          {
                              table.deleteRow(r);
                          }
                        }
                    }
/*sorting of data in table */
function sort(){
                  var tableDiv = document.getElementById('datatable');
                  var table = document.getElementById('dattable');
                  var count = table.rows.length;
                  var td = document.createElement('td');
                  var tr = document.createElement('tr');
                  var temp,a = [],b = [];
                  if((count==0)||(count==1)||(count==2))
                  {
                    alert("sorting is not possible");
                  }
                  else
                  {
                    for (var i = 0; i < count; i++) {
                      var cells = table.rows[i].cells;
                      for (var j = 0; j < cells.length; j++) {
                        a[i][j] = cells[i].innerHTML;
                        b[i][j] = cells[j].innerHTML;
                        if( a[i][j] < b[i][j] )
                        {
                          temp = a[i][j];
                          a[i][j] = b[i][j];
                          b[i][j] = temp;
                        }
                        td.innerHTML = a[i][j];
                        tr.appendChild(td);
                        }
                        table.appendChild(tr);
                    }
                    tableDiv.appendChild(table);
                  }
               }
