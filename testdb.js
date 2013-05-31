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
            'is_read': {$ne: 1}
        },
        {
            sort:{
                'num': -1
            },
            limit: num
        }).toArray(function(err, docs) {
            for(var i = 0; i < docs.length; i++){
                collection.update({'info_hash': docs[i]['info_hash']}, {$set:{'is_read': 1}});
            }
            console.log(docs);
            callback && callback(docs);
        });
}
//function clearData(collection){
//    collection.remove();
//}
//function createTestData(){
//
//}