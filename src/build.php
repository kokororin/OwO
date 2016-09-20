#!/usr/bin/env php
<?php
header('Content-type: text/plain');

$xmlstring = file_get_contents('http://tnt.wicast.tk/japanese-emoticons.xml');
$xml = simplexml_load_string($xmlstring, "SimpleXMLElement", LIBXML_NOCDATA);
$json = json_encode($xml);
$array = json_decode($json, true);

$arr = [];

foreach ($array['category'] as $k1 => $v1) {
    $arr[$v1['@attributes']['name']]['type'] = 'emoticon';
    foreach ($v1['entry'] as $k2 => $v2) {
        $arr[$v1['@attributes']['name']]['container'][$k2] = [
            'icon' => $v2['string'],
            'text' => '',
        ];
    }
}

file_put_contents(__DIR__ . '/OwO.json.dist', json_encode($arr, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
