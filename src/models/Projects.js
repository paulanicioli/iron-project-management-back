const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  user: { type: mongoose.Types.ObjectId, ref: 'User' },
},
{
  timestamps: true,
});

const Projects = mongoose.model('Project', projectSchema);

module.exports = Projects;
