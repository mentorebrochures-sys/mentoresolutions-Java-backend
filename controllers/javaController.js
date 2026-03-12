const supabase = require('../supabaseClient');

// Get all courses
exports.getAll = async (req, res) => {
    const { data, error } = await supabase.from('java_courses').select('*');
    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
};

// Create a new course - Updated to include hours and batch_time
exports.create = async (req, res) => {
    // Destructure the new fields from the request body
    const { start_date, hours, batch_time } = req.body; 
    
    const { data, error } = await supabase
        .from('java_courses')
        .insert([{ start_date, hours, batch_time }]) // Insert updated fields
        .select();

    if (error) return res.status(400).json({ error: error.message });
    res.status(201).json(data);
};

// Update an existing course
exports.update = async (req, res) => {
    // req.body can contain start_date, hours, or batch_time
    const { data, error } = await supabase
        .from('java_courses')
        .update(req.body)
        .eq('id', req.params.id)
        .select();

    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
};

// Delete a course
exports.delete = async (req, res) => {
    const { error } = await supabase
        .from('java_courses')
        .delete()
        .eq('id', req.params.id);

    if (error) return res.status(400).json({ error: error.message });
    res.json({ message: "Java Course Deleted Successfully" });
};