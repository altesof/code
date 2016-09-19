
<?php
    $m = new Memcached();
    $m->addServer('localhost', 11211);
    $m->set('key', 'hello world');
    var_dump($m->get('key'));
?>
