/**
 * Created by geddingsbarrineau on 5/1/16.
 */
document.getElementById("navMenu").innerHTML =
    '<ul class="nav" id="side-menu">'+
    '<li><a href="index.html"><i class="fa fa-home fa-fw"></i>控制器状态</a></li>'+
    '<li><a href="switches.html"><i class="fa fa-exchange"></i>交换机</a></li>'+
    '<li><a href="hosts.html"><i class="fa fa-desktop fa-fw"></i>主机</a></li>'+
    '<li><a href="links.html"><i class="fa fa-expand fa-fw"></i> 链路</a></li>'+
    //'<li><a href="routes.html"><i class="fa fa-link fa-fw"></i> Routes</a></li>'+
    '<li><a href="topology.html"><i class="fa fa-sitemap fa-fw"></i>拓扑</a></li>'+
    '<li><a href="firewall.html"><i class="fa fa-warning fa-fw"></i>防火墙</a></li>'+
    '<li><a href="acl.html"><i class="fa fa-warning fa-fw"></i>ACL</a></li>'+
    '<li><a href="statistics.html"><i class="fa fa-bar-chart-o fa-fw"></i>统计</a></li>'+
    '<li><a data-toggle="modal" href="#login-modal"><i class="fa fa-sign-out"></i>修改控制器</a></li>'+
    '</ul>';

var ipaddress = $.cookie('cip');
if (ipaddress == null || ipaddress == "") window.location.href = "login.html";
var restport = $.cookie('cport');
if (restport == null || restport == "") window.location.href = "login.html";

document.getElementById("home-button-title").innerHTML = "Floodlight控制器 - " + ipaddress + ":" + restport;
