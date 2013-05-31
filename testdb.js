var mongodb = require("mongodb");
var server = new mongodb.Server('localhost',27017,{auto_reconnect:true}, 10);

var db = new mongodb.Db("warm",server);

db.open(function(err,db){
    if(err){
        console.log(err);
    }
    if(!err){
        console.log("we are connected!");
        db.collection('torrents', function(err,collection){
            insertTorrent(collection, {info_hash: 12445 });
            insertTorrent(collection, {info_hash: 12455 });
            insertTorrent(collection, {info_hash: 12465 });
            getTopTorrent(collection, 5);
        });
    }
});

function insertTorrent(collection, data){
    collection.update({'info_hash': data['info_hash']}, {$inc:{'num': 1}} ,{upsert:true, w: 1},function(err,result){
        if(err) throw err;
    });

}
function getTopTorrent(collection, num, callback){
    collection.find({
//            'is_read': {$ne: 1}
        },
        {
            sort:{
                'num': -1
            },
            limit: num,
            fields: {'info_hash': 1, _id : 0}
        }).toArray(function(err, docs) {
            var infos = [];
            for(var i = 0; i < docs.length; i++){
                infos.push(docs[i]['info_hash']);
                collection.update({'info_hash': docs[i]['info_hash']}, {$set:{'is_read': 1}});
            }
            console.log(infos);
            callback && callback(infos);
        });
}
//function clearData(collection){
//    collection.remove();
//}
//function createTestData(){
//
//}