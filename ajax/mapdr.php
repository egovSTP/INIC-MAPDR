<?php
require('../backmapdr/ajax/mysql.php');
require("../backmapdr/ajax/config.php");
$mysql       = new mysql();
$config       = new config();
$connection  = $mysql->connect();
$result      = $mysql->query("call p_mapdr_content()");
$contents = [];
$eid;
$ename;
$esigla;
while ($row = mysqli_fetch_array($result)) {
    $eid     = $row["eid"];
    $ename   = $row["ename"];
    $esigla   = $row["esigla"];
    $cid     = $row["cid"];
    $cname   = $row["cname"];
    $ctype   = $row["ctype"];
    $content = $row["content"];
    $mid = $row["memberid"];
    array_push($contents, Array('id' => $cid, 'name' => $cname, 'type' => $ctype, 'content' => $content, 'memberid' => $mid));
}
echo
'
    <h4 style="color: #023F32 !important;">
        '. $ename .'
    </h4>
';
foreach ($contents as $k => $v) {
    echo
    '
    <h3 style="color: #023F32 !important;">
        '.$v['name']. '
    </h3>
    ' . $v['content'] . '
    ';
}
echo
'
    <div class="faq-list">
        <ul>
            <li class="principal">
                <a data-bs-toggle="collapse" class="collapse" data-bs-target="#faq-list-1">TUTELA<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                <div id="faq-list-1" class="collapse show" data-bs-parent=".faq-list">
                <ul>
                    <li>
                        <a href="ler-tutela.php?t=' . $v['memberid'] . '&nome=' . $ename . '&sigla=' . $esigla . '">
                            <i class="bx bx-chevron-right"></i>' . $ename . ' (' . $esigla . ')
                        </a>
                    </li>
                </ul>
                </div>
            </li>
        </ul>
    </div>
';