let d=new Date();
date=d.getDate();
month=d.getMonth();
year=d.getFullYear();
let comp_date=`${date}/0${month}/${year}`;
$('#date').text(comp_date);