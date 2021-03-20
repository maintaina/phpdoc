<?php
/**
 * Qnd indexer for multiple branches and libraries in one document
 * @author Ralf Lang <lang@b1-systems.de>
 */
$currentBranch = $argv[1] ?? '';
$currentLib = $argv[2] ?? '';
// TODO: Init json if missing
$json = json_decode(file_get_contents('index.json'));
$timestamp = time();

// If we have arguments, add to json
if ($currentBranch && $currentLib) {
    $json->branches->{$currentBranch}->latestLib = $currentLib;
    $json->branches->{$currentBranch}->latestUpdate = $timestamp;
    $json->docdirs->{$currentBranch}->{$currentLib} = $timestamp;
}
file_put_contents('index.json', json_encode($json));

// generate index.html
$page_top = '<html><head><title>Maintaina Horde PHPDoc Index</title></head><body>';
$page_body = '<h1>Available API Documentation</h1><h2>Branches</h2><ul>';
// branches index
foreach ($json->branches as $branch => $updates) {
    $page_body .= sprintf(
        '<li>%s (Last Updated: %s on %s)</li>',
        $branch,
        $updates->latestLib,
        date('c', $updates->latestUpdate)
    );
}
$page_body .= '</ul>';

// generate library index
$page_body .= '<h2>Packages</h2><ul>';
foreach ($json->docdirs as $branch => $libs) {
    foreach ($libs as $lib => $ts) {
        $page_body .= sprintf(
            '<li><a href="%s/%s/index.html">%s/%s (Last Updated: on %s)</a></li>',
            $branch,
            $lib,
            $branch,
            $lib,
            date('c', $ts)
        );
    }
}

$page_body .= '</ul>';
$page_body .= '<hr>Index last generated: ' . date('c', $timestamp);
$page_footer = '</body></html>';

file_put_contents('index.html', $page_top . $page_body . $page_footer);