var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_grifos_1 = new ol.format.GeoJSON();
var features_grifos_1 = format_grifos_1.readFeatures(json_grifos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_grifos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_grifos_1.addFeatures(features_grifos_1);
var lyr_grifos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_grifos_1, 
                style: style_grifos_1,
                popuplayertitle: 'grifos',
                interactive: true,
    title: 'grifos<br />\
    <img src="styles/legend/grifos_1_0.png" /> PENDIENTE<br />\
    <img src="styles/legend/grifos_1_1.png" /> PINTADO<br />\
    <img src="styles/legend/grifos_1_2.png" /> ROTULADO VV DE PIE<br />\
    <img src="styles/legend/grifos_1_3.png" /> ROTULADO ID<br />\
    <img src="styles/legend/grifos_1_4.png" /> ROTULADO COMPLETO<br />\
    <img src="styles/legend/grifos_1_5.png" /> FALTA PINTURA TAPA VV<br />' });

lyr_GoogleSatelite_0.setVisible(true);lyr_grifos_1.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr_grifos_1];
lyr_grifos_1.set('fieldAliases', {'fid': 'fid', 'ID_GRIFO': 'ID_GRIFO', 'UBICACION': 'UBICACION', 'ESTADO': 'ESTADO', 'FOTO_ANTES': 'FOTO_ANTES', 'FOTO_PINTURA': 'FOTO_PINTURA', 'COMUNA': 'COMUNA', 'COLOR AMARILLO REY': 'COLOR AMARILLO REY', 'VV_PIE_VISIBLE': 'VV_PIE_VISIBLE', 'FUGA': 'FUGA', 'TAPA_BOCA': 'TAPA_BOCA', 'HILO_BUENO': 'HILO_BUENO', 'E': 'E', 'n': 'n', 'FOTO_ROTULADO_VV': 'FOTO_ROTULADO_VV', 'FOTO_ROTULADO_ID': 'FOTO_ROTULADO_ID', 'ROTULADO_VVPIE': 'ROTULADO_VVPIE', 'ROTULADO_ID': 'ROTULADO_ID', 'FOTO_PINTURA_VVPIE': 'FOTO_PINTURA_VVPIE', 'OBSERVACION': 'OBSERVACION', });
lyr_grifos_1.set('fieldImages', {'fid': 'TextEdit', 'ID_GRIFO': 'TextEdit', 'UBICACION': 'TextEdit', 'ESTADO': 'ValueMap', 'FOTO_ANTES': 'ExternalResource', 'FOTO_PINTURA': 'ExternalResource', 'COMUNA': 'TextEdit', 'COLOR AMARILLO REY': 'TextEdit', 'VV_PIE_VISIBLE': 'TextEdit', 'FUGA': 'TextEdit', 'TAPA_BOCA': 'TextEdit', 'HILO_BUENO': 'TextEdit', 'E': 'Range', 'n': 'Range', 'FOTO_ROTULADO_VV': 'ExternalResource', 'FOTO_ROTULADO_ID': 'ExternalResource', 'ROTULADO_VVPIE': 'TextEdit', 'ROTULADO_ID': 'TextEdit', 'FOTO_PINTURA_VVPIE': 'ExternalResource', 'OBSERVACION': '', });
lyr_grifos_1.set('fieldLabels', {'fid': 'hidden field', 'ID_GRIFO': 'inline label - visible with data', 'UBICACION': 'inline label - visible with data', 'ESTADO': 'inline label - visible with data', 'FOTO_ANTES': 'inline label - visible with data', 'FOTO_PINTURA': 'inline label - visible with data', 'COMUNA': 'hidden field', 'COLOR AMARILLO REY': 'inline label - visible with data', 'VV_PIE_VISIBLE': 'inline label - visible with data', 'FUGA': 'inline label - visible with data', 'TAPA_BOCA': 'hidden field', 'HILO_BUENO': 'hidden field', 'E': 'inline label - visible with data', 'n': 'inline label - visible with data', 'FOTO_ROTULADO_VV': 'inline label - visible with data', 'FOTO_ROTULADO_ID': 'inline label - visible with data', 'ROTULADO_VVPIE': 'hidden field', 'ROTULADO_ID': 'hidden field', 'FOTO_PINTURA_VVPIE': 'inline label - visible with data', 'OBSERVACION': 'inline label - visible with data', });
lyr_grifos_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});