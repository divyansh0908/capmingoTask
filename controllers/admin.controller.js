const db = require("../models");
const Teacher = db.teacher;



exports.addTeacher = (req, res) => {
    const teacher = new Teacher({
        name: req.body.name,
        subject: req.body.subject
    });
    teacher.save((err, teacher) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send({ message: "Teacher was added successfully!" });
    }
    )
}
exports.removeTeacher = (req, res) => {
    Teacher.findOneAndRemove({
        id: req.body.id
    }).exec((err, teacher) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send({ message: "Teacher was removed successfully!" });
    });
}






