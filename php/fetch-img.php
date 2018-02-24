<?php
  $html = file_get_contents('https://www.google.com/');
  preg_match_all( '|<img.*?src=[\'"](.*?)[\'"].*?>|i',$html, $matches );
  echo $matches[ 1 ][ 0 ];
?>
