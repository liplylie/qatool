<?
$html = file_get_contents($_GET['url']);
$dom = new DOMDocument();
$dom->loadHTML(mb_convert_encoding($html, 'HTML-ENTITIES', 'UTF-8'));
$xpath = new DOMXPath($dom);
foreach ($xpath->query('//pre') as $node) { $node->parentNode->removeChild($node); }
foreach ($xpath->query('//code') as $node) { $node->parentNode->removeChild($node); }
foreach ($xpath->query('//img') as $node) { $node->parentNode->removeChild($node); }
$html = $dom->saveHTML();
$input = $dom->saveHTML($dom->getElementById('hs_cos_wrapper_post_body'));
$input = str_replace("  ", " &nbsp;", $input);
$input = str_replace(" ", "&nbsp;", $input);
$breaks = array("<br />","<br>","<br/>");  
$input = str_ireplace($breaks, "\n", $input);
$input = str_replace("\n\n\n", "\n", $input);
echo $input = str_replace("\n\n", "\n", $input);
}
?>