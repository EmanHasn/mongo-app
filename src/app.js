const { error } = require('console');
const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;
const connectionUrl = 'mongodb://127.0.0.1:27017'
const dbname = "proj-2";
mongoClient.connect(connectionUrl , (err , res)=>{
    if(err) console.log(err)
    console.log("connection success")
    const db = res.db(dbname)

    // db.collection('students').insertOne(
    //     {name : "inserted st1" ,
    //     age: 20},(err , st)=>{
    //         if(err) console.log(err)
    //         console.log(st)
    //     }
    // )
    // db.collection('students').insertOne(
    //     {name : "inserted st2" ,
    //     age: 21},(err , st)=>{
    //         if(err) console.log(err)
    //         console.log(st)
    //     }
    // )
    // db.collection('students').insertMany(
    //     [
    //         {
    //             name: 'student1',
    //             age:27
    //         },
    //         {
    //             name: 'student2',
    //             age:27
    //         },
    //         {
    //             name: 'student3',
    //             age:27
    //         },
    //         {
    //             name: 'student4',
    //             age:27
    //         },
    //         {
    //             name: 'student5',
    //             age:27
    //         },
    //         {
    //             name: 'student6',
    //             age:30
    //         },
    //         {
    //             name: 'student7',
    //             age:31
    //         },
    //         {
    //             name: 'student8',
    //             age:32
    //         },{
    //             name: 'student9',
    //             age:33
    //         },
    //         {
    //             name: 'student10',
    //             age:34
    //         },
    //     ] , 
    //     (err , students)=>{
    //         if(err) console.log('unable to insert many users')
    //         console.log(students)
    //     }
    // )

    // db.collection('students').find({age:27}).toArray((err , students)=>{
    //     if(err) console.log("unable to find 27y students")
    //     console.log(students)
    // })
    // db.collection('students').find({age:27}).limit(3).toArray((err , students)=>{
    //     if(err) console.log("unable to find 27y students")
    //     console.log(students)
    // })
    // db.collection('students').updateOne({_id:mongodb.ObjectId('649616f8727d641d8ec068f1')} , {
    //     $set:{name:'changedName-1'}
    // }).then(data1 => console.log(data1.modifiedCount))
    // .catch(err=> console.log("error in update"))

    // db.collection('students').updateOne({_id:mongodb.ObjectId('649616f8727d641d8ec068f2')} , {
    //     $set:{name:'changedName-2'}
    // }).then(data1 => console.log(data1.modifiedCount))
    // .catch(err=> console.log("error in update"))

    // db.collection('students').updateOne({_id:mongodb.ObjectId('649616f8727d641d8ec068f3')} , {
    //     $set:{name:'changedName-3'}
    // }).then(data1 => console.log(data1.modifiedCount))
    // .catch(err=> console.log("error in update"))

    // db.collection('students').updateOne({_id:mongodb.ObjectId('649616f8727d641d8ec068f4')} , {
    //     $set:{name:'changedName-4'}
    // }).then(data1 => console.log(data1.modifiedCount))
    // .catch(err=> console.log("error in update"))

    // db.collection('students').updateMany({} , 
    //     {$inc: {age:4}},
    //     ).then(data1 => console.log(data1.modifiedCount))
    //     .catch(err=> console.log("error in update"))

    // db.collection('students').updateMany({} , 
    //     {$inc: {age:10}},
    //     ).then(data1 => console.log(data1.modifiedCount))
    //     .catch(err=> console.log("error in update"))

    db.collection('students').deleteMany({age:41} , (err,data)=>{
        if(err) console.log('failed to delete age 41y')
        console.log(data.deletedCount)
    })

})
