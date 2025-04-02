var wms_layers = [];


        var lyr_ESRISatelliteArcGISWorld_Imagery_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleRoads_1 = new ol.layer.Tile({
            'title': 'Google Roads',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_2 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_PassiveOpenSpace_3 = new ol.format.GeoJSON();
var features_PassiveOpenSpace_3 = format_PassiveOpenSpace_3.readFeatures(json_PassiveOpenSpace_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PassiveOpenSpace_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PassiveOpenSpace_3.addFeatures(features_PassiveOpenSpace_3);
var lyr_PassiveOpenSpace_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PassiveOpenSpace_3, 
                style: style_PassiveOpenSpace_3,
                popuplayertitle: 'Passive Open Space',
                interactive: false,
                title: '<img src="styles/legend/PassiveOpenSpace_3.png" /> Passive Open Space'
            });
var format_MixedFarming_4 = new ol.format.GeoJSON();
var features_MixedFarming_4 = format_MixedFarming_4.readFeatures(json_MixedFarming_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MixedFarming_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MixedFarming_4.addFeatures(features_MixedFarming_4);
var lyr_MixedFarming_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MixedFarming_4, 
                style: style_MixedFarming_4,
                popuplayertitle: 'Mixed Farming',
                interactive: true,
                title: '<img src="styles/legend/MixedFarming_4.png" /> Mixed Farming'
            });
var format_LawnandPlayground_5 = new ol.format.GeoJSON();
var features_LawnandPlayground_5 = format_LawnandPlayground_5.readFeatures(json_LawnandPlayground_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LawnandPlayground_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LawnandPlayground_5.addFeatures(features_LawnandPlayground_5);
var lyr_LawnandPlayground_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LawnandPlayground_5, 
                style: style_LawnandPlayground_5,
                popuplayertitle: 'Lawn and Playground',
                interactive: true,
                title: '<img src="styles/legend/LawnandPlayground_5.png" /> Lawn and Playground'
            });
var format_Wetland_6 = new ol.format.GeoJSON();
var features_Wetland_6 = format_Wetland_6.readFeatures(json_Wetland_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wetland_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wetland_6.addFeatures(features_Wetland_6);
var lyr_Wetland_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wetland_6, 
                style: style_Wetland_6,
                popuplayertitle: 'Wetland',
                interactive: false,
                title: '<img src="styles/legend/Wetland_6.png" /> Wetland'
            });
var format_Orchard_7 = new ol.format.GeoJSON();
var features_Orchard_7 = format_Orchard_7.readFeatures(json_Orchard_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Orchard_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Orchard_7.addFeatures(features_Orchard_7);
var lyr_Orchard_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Orchard_7, 
                style: style_Orchard_7,
                popuplayertitle: 'Orchard',
                interactive: true,
                title: '<img src="styles/legend/Orchard_7.png" /> Orchard'
            });
var format_Vineyard_8 = new ol.format.GeoJSON();
var features_Vineyard_8 = format_Vineyard_8.readFeatures(json_Vineyard_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vineyard_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vineyard_8.addFeatures(features_Vineyard_8);
var lyr_Vineyard_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vineyard_8, 
                style: style_Vineyard_8,
                popuplayertitle: 'Vineyard',
                interactive: true,
                title: '<img src="styles/legend/Vineyard_8.png" /> Vineyard'
            });
var format_Garden_9 = new ol.format.GeoJSON();
var features_Garden_9 = format_Garden_9.readFeatures(json_Garden_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Garden_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Garden_9.addFeatures(features_Garden_9);
var lyr_Garden_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Garden_9, 
                style: style_Garden_9,
                popuplayertitle: 'Garden',
                interactive: true,
                title: '<img src="styles/legend/Garden_9.png" /> Garden'
            });
var format_TuscanGardenandCottage_10 = new ol.format.GeoJSON();
var features_TuscanGardenandCottage_10 = format_TuscanGardenandCottage_10.readFeatures(json_TuscanGardenandCottage_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TuscanGardenandCottage_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TuscanGardenandCottage_10.addFeatures(features_TuscanGardenandCottage_10);
var lyr_TuscanGardenandCottage_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TuscanGardenandCottage_10, 
                style: style_TuscanGardenandCottage_10,
                popuplayertitle: 'Tuscan Garden and Cottage',
                interactive: true,
                title: '<img src="styles/legend/TuscanGardenandCottage_10.png" /> Tuscan Garden and Cottage'
            });
var format_ParkingSpace_11 = new ol.format.GeoJSON();
var features_ParkingSpace_11 = format_ParkingSpace_11.readFeatures(json_ParkingSpace_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParkingSpace_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParkingSpace_11.addFeatures(features_ParkingSpace_11);
var lyr_ParkingSpace_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParkingSpace_11, 
                style: style_ParkingSpace_11,
                popuplayertitle: 'Parking Space',
                interactive: true,
                title: '<img src="styles/legend/ParkingSpace_11.png" /> Parking Space'
            });
var format_FunctionSpace_12 = new ol.format.GeoJSON();
var features_FunctionSpace_12 = format_FunctionSpace_12.readFeatures(json_FunctionSpace_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FunctionSpace_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FunctionSpace_12.addFeatures(features_FunctionSpace_12);
var lyr_FunctionSpace_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FunctionSpace_12, 
                style: style_FunctionSpace_12,
                popuplayertitle: 'Function Space',
                interactive: true,
                title: '<img src="styles/legend/FunctionSpace_12.png" /> Function Space'
            });
var format_PedestrianPath_13 = new ol.format.GeoJSON();
var features_PedestrianPath_13 = format_PedestrianPath_13.readFeatures(json_PedestrianPath_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PedestrianPath_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PedestrianPath_13.addFeatures(features_PedestrianPath_13);
var lyr_PedestrianPath_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PedestrianPath_13, 
                style: style_PedestrianPath_13,
                popuplayertitle: 'Pedestrian Path',
                interactive: false,
                title: '<img src="styles/legend/PedestrianPath_13.png" /> Pedestrian Path'
            });
var format_Road_14 = new ol.format.GeoJSON();
var features_Road_14 = format_Road_14.readFeatures(json_Road_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_14.addFeatures(features_Road_14);
var lyr_Road_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_14, 
                style: style_Road_14,
                popuplayertitle: 'Road',
                interactive: false,
                title: '<img src="styles/legend/Road_14.png" /> Road'
            });
var format_AccessRoad_15 = new ol.format.GeoJSON();
var features_AccessRoad_15 = format_AccessRoad_15.readFeatures(json_AccessRoad_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AccessRoad_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AccessRoad_15.addFeatures(features_AccessRoad_15);
var lyr_AccessRoad_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AccessRoad_15, 
                style: style_AccessRoad_15,
                popuplayertitle: 'Access Road',
                interactive: false,
                title: '<img src="styles/legend/AccessRoad_15.png" /> Access Road'
            });
var format_Toilet_16 = new ol.format.GeoJSON();
var features_Toilet_16 = format_Toilet_16.readFeatures(json_Toilet_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Toilet_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toilet_16.addFeatures(features_Toilet_16);
var lyr_Toilet_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Toilet_16, 
                style: style_Toilet_16,
                popuplayertitle: 'Toilet',
                interactive: true,
                title: '<img src="styles/legend/Toilet_16.png" /> Toilet'
            });
var format_GlampingTent_17 = new ol.format.GeoJSON();
var features_GlampingTent_17 = format_GlampingTent_17.readFeatures(json_GlampingTent_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GlampingTent_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GlampingTent_17.addFeatures(features_GlampingTent_17);
var lyr_GlampingTent_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GlampingTent_17, 
                style: style_GlampingTent_17,
                popuplayertitle: 'Glamping Tent',
                interactive: true,
                title: '<img src="styles/legend/GlampingTent_17.png" /> Glamping Tent'
            });
var format_BufferDistancesResidential_18 = new ol.format.GeoJSON();
var features_BufferDistancesResidential_18 = format_BufferDistancesResidential_18.readFeatures(json_BufferDistancesResidential_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BufferDistancesResidential_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BufferDistancesResidential_18.addFeatures(features_BufferDistancesResidential_18);
var lyr_BufferDistancesResidential_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BufferDistancesResidential_18, 
                style: style_BufferDistancesResidential_18,
                popuplayertitle: 'Buffer Distances (Residential)',
                interactive: false,
                title: '<img src="styles/legend/BufferDistancesResidential_18.png" /> Buffer Distances (Residential)'
            });
var format_SiteBoundary_19 = new ol.format.GeoJSON();
var features_SiteBoundary_19 = format_SiteBoundary_19.readFeatures(json_SiteBoundary_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SiteBoundary_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SiteBoundary_19.addFeatures(features_SiteBoundary_19);
var lyr_SiteBoundary_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SiteBoundary_19, 
                style: style_SiteBoundary_19,
                popuplayertitle: 'Site Boundary',
                interactive: false,
                title: '<img src="styles/legend/SiteBoundary_19.png" /> Site Boundary'
            });
var group_Administrative = new ol.layer.Group({
                                layers: [lyr_SiteBoundary_19,],
                                fold: "close",
                                title: 'Administrative'});
var group_LandUse = new ol.layer.Group({
                                layers: [lyr_PassiveOpenSpace_3,lyr_MixedFarming_4,lyr_LawnandPlayground_5,lyr_Wetland_6,lyr_Orchard_7,lyr_Vineyard_8,lyr_Garden_9,lyr_TuscanGardenandCottage_10,lyr_ParkingSpace_11,lyr_FunctionSpace_12,lyr_PedestrianPath_13,lyr_Road_14,lyr_AccessRoad_15,lyr_Toilet_16,lyr_GlampingTent_17,lyr_BufferDistancesResidential_18,],
                                fold: "close",
                                title: 'Land Use'});
var group_BaseLayer = new ol.layer.Group({
                                layers: [lyr_ESRISatelliteArcGISWorld_Imagery_0,lyr_GoogleRoads_1,lyr_GoogleSatelliteHybrid_2,],
                                fold: "open",
                                title: 'Base Layer'});

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(false);lyr_GoogleRoads_1.setVisible(false);lyr_GoogleSatelliteHybrid_2.setVisible(true);lyr_PassiveOpenSpace_3.setVisible(true);lyr_MixedFarming_4.setVisible(true);lyr_LawnandPlayground_5.setVisible(true);lyr_Wetland_6.setVisible(true);lyr_Orchard_7.setVisible(true);lyr_Vineyard_8.setVisible(true);lyr_Garden_9.setVisible(true);lyr_TuscanGardenandCottage_10.setVisible(true);lyr_ParkingSpace_11.setVisible(true);lyr_FunctionSpace_12.setVisible(true);lyr_PedestrianPath_13.setVisible(true);lyr_Road_14.setVisible(true);lyr_AccessRoad_15.setVisible(true);lyr_Toilet_16.setVisible(true);lyr_GlampingTent_17.setVisible(true);lyr_BufferDistancesResidential_18.setVisible(false);lyr_SiteBoundary_19.setVisible(true);
var layersList = [group_BaseLayer,group_LandUse,group_Administrative];
lyr_PassiveOpenSpace_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PROP_PFI': 'PROP_PFI', 'PROP_LGA_CODE': 'PROP_LGA_CODE', 'PROP_PROPNUM': 'PROP_PROPNUM', 'PROP_PROPERTY_TYPE': 'PROP_PROPERTY_TYPE', 'PROP_MULTI_ASSESSMENT': 'PROP_MULTI_ASSESSMENT', 'PROP_STATUS': 'PROP_STATUS', 'ADD_EZI_ADDRESS': 'ADD_EZI_ADDRESS', 'ADD_IS_PRIMARY': 'ADD_IS_PRIMARY', 'ADD_HOUSE_NUMBER_1': 'ADD_HOUSE_NUMBER_1', 'ADD_HOUSE_SUFFIX_1': 'ADD_HOUSE_SUFFIX_1', 'ADD_ROAD_NAME': 'ADD_ROAD_NAME', 'ADD_ROAD_TYPE': 'ADD_ROAD_TYPE', 'ADD_ROAD_SUFFIX': 'ADD_ROAD_SUFFIX', 'ADD_LOCALITY_NAME': 'ADD_LOCALITY_NAME', 'ADD_STATE': 'ADD_STATE', 'ADD_POSTCODE': 'ADD_POSTCODE', 'ADD_NUM_ROAD_ADDRESS': 'ADD_NUM_ROAD_ADDRESS', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_MixedFarming_4.set('fieldAliases', {'id': 'id', 'a': 'a', });
lyr_LawnandPlayground_5.set('fieldAliases', {'id': 'id', 'a': 'a', });
lyr_Wetland_6.set('fieldAliases', {'id': 'id', });
lyr_Orchard_7.set('fieldAliases', {'id': 'id', 'a': 'a', });
lyr_Vineyard_8.set('fieldAliases', {'id': 'id', 'a': 'a', });
lyr_Garden_9.set('fieldAliases', {'id': 'id', 'a': 'a', });
lyr_TuscanGardenandCottage_10.set('fieldAliases', {'id': 'id', 'a': 'a', });
lyr_ParkingSpace_11.set('fieldAliases', {'id': 'id', 'a': 'a', });
lyr_FunctionSpace_12.set('fieldAliases', {'id': 'id', 'a': 'a', });
lyr_PedestrianPath_13.set('fieldAliases', {'id': 'id', });
lyr_Road_14.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_AccessRoad_15.set('fieldAliases', {'id': 'id', });
lyr_Toilet_16.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_GlampingTent_17.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_BufferDistancesResidential_18.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_SiteBoundary_19.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PROP_PFI': 'PROP_PFI', 'PROP_LGA_CODE': 'PROP_LGA_CODE', 'PROP_PROPNUM': 'PROP_PROPNUM', 'PROP_PROPERTY_TYPE': 'PROP_PROPERTY_TYPE', 'PROP_MULTI_ASSESSMENT': 'PROP_MULTI_ASSESSMENT', 'PROP_STATUS': 'PROP_STATUS', 'ADD_EZI_ADDRESS': 'ADD_EZI_ADDRESS', 'ADD_IS_PRIMARY': 'ADD_IS_PRIMARY', 'ADD_HOUSE_NUMBER_1': 'ADD_HOUSE_NUMBER_1', 'ADD_HOUSE_SUFFIX_1': 'ADD_HOUSE_SUFFIX_1', 'ADD_ROAD_NAME': 'ADD_ROAD_NAME', 'ADD_ROAD_TYPE': 'ADD_ROAD_TYPE', 'ADD_ROAD_SUFFIX': 'ADD_ROAD_SUFFIX', 'ADD_LOCALITY_NAME': 'ADD_LOCALITY_NAME', 'ADD_STATE': 'ADD_STATE', 'ADD_POSTCODE': 'ADD_POSTCODE', 'ADD_NUM_ROAD_ADDRESS': 'ADD_NUM_ROAD_ADDRESS', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_PassiveOpenSpace_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PROP_PFI': 'TextEdit', 'PROP_LGA_CODE': 'TextEdit', 'PROP_PROPNUM': 'TextEdit', 'PROP_PROPERTY_TYPE': 'TextEdit', 'PROP_MULTI_ASSESSMENT': 'TextEdit', 'PROP_STATUS': 'TextEdit', 'ADD_EZI_ADDRESS': 'TextEdit', 'ADD_IS_PRIMARY': 'TextEdit', 'ADD_HOUSE_NUMBER_1': 'TextEdit', 'ADD_HOUSE_SUFFIX_1': 'TextEdit', 'ADD_ROAD_NAME': 'TextEdit', 'ADD_ROAD_TYPE': 'TextEdit', 'ADD_ROAD_SUFFIX': 'TextEdit', 'ADD_LOCALITY_NAME': 'TextEdit', 'ADD_STATE': 'TextEdit', 'ADD_POSTCODE': 'TextEdit', 'ADD_NUM_ROAD_ADDRESS': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MixedFarming_4.set('fieldImages', {'id': 'TextEdit', 'a': 'TextEdit', });
lyr_LawnandPlayground_5.set('fieldImages', {'id': 'TextEdit', 'a': 'TextEdit', });
lyr_Wetland_6.set('fieldImages', {'id': 'TextEdit', });
lyr_Orchard_7.set('fieldImages', {'id': 'TextEdit', 'a': 'TextEdit', });
lyr_Vineyard_8.set('fieldImages', {'id': 'TextEdit', 'a': 'TextEdit', });
lyr_Garden_9.set('fieldImages', {'id': 'TextEdit', 'a': 'TextEdit', });
lyr_TuscanGardenandCottage_10.set('fieldImages', {'id': 'TextEdit', 'a': 'TextEdit', });
lyr_ParkingSpace_11.set('fieldImages', {'id': 'TextEdit', 'a': 'TextEdit', });
lyr_FunctionSpace_12.set('fieldImages', {'id': 'TextEdit', 'a': 'TextEdit', });
lyr_PedestrianPath_13.set('fieldImages', {'id': 'TextEdit', });
lyr_Road_14.set('fieldImages', {'fid': '', 'id': '', });
lyr_AccessRoad_15.set('fieldImages', {'id': 'TextEdit', });
lyr_Toilet_16.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_GlampingTent_17.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_BufferDistancesResidential_18.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_SiteBoundary_19.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PROP_PFI': 'TextEdit', 'PROP_LGA_CODE': 'TextEdit', 'PROP_PROPNUM': 'TextEdit', 'PROP_PROPERTY_TYPE': 'TextEdit', 'PROP_MULTI_ASSESSMENT': 'TextEdit', 'PROP_STATUS': 'TextEdit', 'ADD_EZI_ADDRESS': 'TextEdit', 'ADD_IS_PRIMARY': 'TextEdit', 'ADD_HOUSE_NUMBER_1': 'TextEdit', 'ADD_HOUSE_SUFFIX_1': 'TextEdit', 'ADD_ROAD_NAME': 'TextEdit', 'ADD_ROAD_TYPE': 'TextEdit', 'ADD_ROAD_SUFFIX': 'TextEdit', 'ADD_LOCALITY_NAME': 'TextEdit', 'ADD_STATE': 'TextEdit', 'ADD_POSTCODE': 'TextEdit', 'ADD_NUM_ROAD_ADDRESS': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PassiveOpenSpace_3.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PROP_PFI': 'no label', 'PROP_LGA_CODE': 'no label', 'PROP_PROPNUM': 'no label', 'PROP_PROPERTY_TYPE': 'no label', 'PROP_MULTI_ASSESSMENT': 'no label', 'PROP_STATUS': 'no label', 'ADD_EZI_ADDRESS': 'no label', 'ADD_IS_PRIMARY': 'no label', 'ADD_HOUSE_NUMBER_1': 'no label', 'ADD_HOUSE_SUFFIX_1': 'no label', 'ADD_ROAD_NAME': 'no label', 'ADD_ROAD_TYPE': 'no label', 'ADD_ROAD_SUFFIX': 'no label', 'ADD_LOCALITY_NAME': 'no label', 'ADD_STATE': 'no label', 'ADD_POSTCODE': 'no label', 'ADD_NUM_ROAD_ADDRESS': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_MixedFarming_4.set('fieldLabels', {'id': 'hidden field', 'a': 'no label', });
lyr_LawnandPlayground_5.set('fieldLabels', {'id': 'hidden field', 'a': 'no label', });
lyr_Wetland_6.set('fieldLabels', {'id': 'no label', });
lyr_Orchard_7.set('fieldLabels', {'id': 'hidden field', 'a': 'no label', });
lyr_Vineyard_8.set('fieldLabels', {'id': 'hidden field', 'a': 'no label', });
lyr_Garden_9.set('fieldLabels', {'id': 'hidden field', 'a': 'no label', });
lyr_TuscanGardenandCottage_10.set('fieldLabels', {'id': 'hidden field', 'a': 'no label', });
lyr_ParkingSpace_11.set('fieldLabels', {'id': 'hidden field', 'a': 'no label', });
lyr_FunctionSpace_12.set('fieldLabels', {'id': 'hidden field', 'a': 'no label', });
lyr_PedestrianPath_13.set('fieldLabels', {'id': 'no label', });
lyr_Road_14.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_AccessRoad_15.set('fieldLabels', {'id': 'no label', });
lyr_Toilet_16.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_GlampingTent_17.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_BufferDistancesResidential_18.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_SiteBoundary_19.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PROP_PFI': 'no label', 'PROP_LGA_CODE': 'no label', 'PROP_PROPNUM': 'no label', 'PROP_PROPERTY_TYPE': 'no label', 'PROP_MULTI_ASSESSMENT': 'no label', 'PROP_STATUS': 'no label', 'ADD_EZI_ADDRESS': 'no label', 'ADD_IS_PRIMARY': 'no label', 'ADD_HOUSE_NUMBER_1': 'no label', 'ADD_HOUSE_SUFFIX_1': 'no label', 'ADD_ROAD_NAME': 'no label', 'ADD_ROAD_TYPE': 'no label', 'ADD_ROAD_SUFFIX': 'no label', 'ADD_LOCALITY_NAME': 'no label', 'ADD_STATE': 'no label', 'ADD_POSTCODE': 'no label', 'ADD_NUM_ROAD_ADDRESS': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_SiteBoundary_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});