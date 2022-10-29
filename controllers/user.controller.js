const db = require("../models");
const Student = db.student;
const Teacher = db.teacher;

exports.addFavouriteTeacher = (req, res) => {
    Student.findOneAndUpdate({
        id: req.body.id
    }, {
        $push: {
            favouriteTeachers: req.body.teacherId
        }
    }).exec((err, student) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send({ message: "Teacher was added successfully!" });
    });
}
exports.removeFavouriteTeacher = (req, res) => {
    Student.findOneAndUpdate({
        id: req.body.id
    }, {
        $pull: {
            favouriteTeachers: req.body.teacherId
        }
    }).exec((err, student) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send({ message: "Teacher was removed successfully!" });
    });
}
exports.getTeachersByName = (req, res) => {
    Teacher.find({
        name: req.params.name
    }).exec((err, teachers) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send(teachers);
    });
}
exports.getMaximumFavouriteTeachers = (req, res) => {
    // aggregation PipieLine for getting teacher who have maximum favourite students
    Teacher.aggregate([
        {
            $lookup: {
                from: "students",
                localField: "_id",
                foreignField: "favouriteTeachers",
                as: "students"
            }
        },
        {
            $project: {
                _id: 1,
                name: 1,
                subject: 1,
                students: 1,
                count: { $size: "$students" }
            }
        },
        {
            $sort: {
                count: -1
            }
        },
        {
            $limit: 1
        }
    ]).exec((err, teachers) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send(teachers);
    }
    )
}






 

