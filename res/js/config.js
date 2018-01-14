requirejs.config({
    baseUrl: '../res/js',
    paths: {
        jquery	    : 'vendor/jquery/jquery.min',
        bs		    : 'vendor/bootstrap/js/bootstrap.min',
        metisMenu   : 'vendor/metisMenu/metisMenu.min',
        sbAdmin2    : 'vendor/sb-admin2/js/sb-admin-2.min',
        vue		    : 'vendor/vue/vue.min',
        ckedit		: 'vendor/ckeditor/ckeditor'
    },
    shim: {
        bs: {
            deps: [
                'jquery',
            ]
        },
        metisMenu: {
            deps: [
                'jquery',
            ]
        },
        sbAdmin2: {
            deps: [
                'bs',
                'metisMenu',
            ]
        }
    }
});