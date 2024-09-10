<?php
if (isset($_GET["tipo"]) && isset($_GET["base"])) {
    try {
        $tipo       = $_GET['tipo'];
        $base       = $_GET['base'];
        require('../mysql.php');
        $mysql      = new mysql();
        $mysql->connect();
        switch ($tipo) {
            case "tdocscategory":
                $result = $mysql->query("call p_view_category('tdocscategory')");
                break;
            case "artigo":
                $result = $mysql->query("call p_view_artigo_category()");
                break;
            case "tnewscategory":
                $result = $mysql->query("call p_view_category('tnewscategory')");
                break;
            case "tnewsfiletype":
                $result = $mysql->query("call p_view_category('tnewsfiletype')");
                break;
            case "tprojectstate":
                $result = $mysql->query("call p_view_category('tprojectstate')");
                break;
        }
        switch ($tipo) {
            case "artigo":
                echo "<select id='artigoCategorySelect' name='artigoCategorySelect' style='width: 160px' onchange='scheduleArtigoCategory.call(this, event)'>";
                break;
            case "tdocscategory":
                echo "<select id='documentCategorySelect' name='documentCategorySelect' style='width: 160px' onchange='scheduleDocumentCategory.call(this, event)'>";
                break;
            case "tnewscategory":
                echo "<select id='newsCategorySelect' name='newsCategorySelect' style='width: 160px' onchange='scheduleNewsCategory.call(this, event)'>";
                break;
            case "tnewsfiletype":
                echo "<select id='newsFileTypeSelect' name='newsFileTypeSelect' style='width: 160px' >";
                break;
            case "tprojectstate":
                echo "<select id='projectstateSelect' name='projectstateSelect' style='width: 600px;font-size:12px' onchange='scheduleNewsFileType.call(this, event)'>";
                break;
        }
        if ($base == "yes") echo "<option selected value='-1'>Todas</option>";
        if ($result) {
            while ($row = mysqli_fetch_array($result)) {
                if (isset($_GET['gid']))
                    echo "<option value='" . $row['id'] . "'>" . $row['name'] . " " . $row['surname'] . "</option>";
                else
                    echo "<option value='" . $row['id'] . "'>" . $row['name'] . "</option>";
            }
        }
        echo "</select>";
    } catch (Exception $e) {
        echo $e->getMessage();
    }
} else
    echo "no params";
