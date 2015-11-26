<style>
div.dropdown {

color: #555;

margin: 3px -22px 0 0;

width: 143px;

position: relative;

height: 17px;

text-align:left;

}

div.submenu

{

position: absolute;

z-index: 100;

width: 135px;

display: none;

margin-left: 10px;

padding: 40px 0 5px;

border-radius: 6px;

}

.dropdown  li a {

color: #555555;

display: block;

font-family: arial;

font-weight: bold;

padding: 6px 15px;

cursor: pointer;

text-decoration:none;

}

.dropdown li a:hover{

background:#155FB0;

color: #FFFFFF;

text-decoration: none;

}

a.account {

font-size: 11px;

line-height: 16px;

color: #555;

position: absolute;

z-index: 110;

display: block;

padding: 11px 0 0 20px;

height: 28px;

width: 121px;

margin: -11px 0 0 -10px;

text-decoration: none;

background: url(images/arrow.png) 80px 32px no-repeat;

cursor:pointer;

}

.root

{

list-style: none;

font-size: 11px;

box-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);

background: #fff;

padding: 10px 0 10px 0;

border-radius: 5px 5px 5px 5px;

margin: 21px 0 0 0;

}

.root:before {

content: '';

display: inline-block;

border-left: 7px solid transparent;

border-right: 7px solid transparent;

border-bottom: 7px solid #ccc;

border-bottom-color: #ffffff;

position: absolute;

color: #ffffff;

top: 54px;

left: 17px;

}

.profile-circle {

width: 45px;

height: 44px;

background-size: cover;

background-repeat: no-repeat;

background-position: center center;

-webkit-border-radius: 99em;

-moz-border-radius: 99em;

border-radius: 99em;

border: 2px solid #eee;

box-shadow: 0 3px 2px rgba(0, 0, 0, 0.3);

vertical-align: middle;

}

</style>

<script>

$(document).ready(function()

{

$(".account").click(function()

{

var X=$(this).attr('id');

if(X==1)

{

$(".submenu").hide();

$(this).attr('id', '0'); 

}

else

{

$(".submenu").show();

$(this).attr('id', '1');

}

});

$(".submenu").mouseup(function()

{

return false

});

$(".account").mouseup(function()

{

return false

});

$(document).mouseup(function()

{

$(".submenu").hide();

$(".account").attr('id', '');

});

});

</script>


<div class="dropdown">

<a href=""# class="account" >

<img src="images/avatar.png" class="profile-circle"/>

</a>

<div class="submenu" style="display: none; ">

<ul class="root">

<li >

<a href="#" >Dashboard</a>

</li>

<li >

<a href="#" >Profile</a>

</li>

<li >

<a href="#">Settings</a>

</li>

<li>

<a href="#">Sign Out</a>

</li>

</ul>

</div>

</div>