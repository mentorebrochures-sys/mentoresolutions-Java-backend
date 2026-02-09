const supabase = require('../supabaseClient');

// 1. Get all Java courses
exports.getAll = async (req, res) => {
    const { data, error } = await supabase.from('courses1').select('*');
    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
};

// 2. Create Java course
exports.create = async (req, res) => {
    // Database madhe 'duration1' ani 'start_date1' naave aahet
    const { duration1, start_date1 } = req.body; 
    const { data, error } = await supabase
        .from('courses1')
        .insert([{ duration1, start_date1 }])
        .select();

    if (error) return res.status(400).json({ error: error.message });
    res.status(201).json(data);
};

// 3. Update Java course
exports.update = async (req, res) => {
    const { data, error } = await supabase
        .from('courses1')
        .update(req.body)
        .eq('id', req.params.id)
        .select();

    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
};

// 4. Delete Java course
exports.delete = async (req, res) => {
    const { error } = await supabase
        .from('courses1')
        .delete()
        .eq('id', req.params.id);

    if (error) return res.status(400).json({ error: error.message });
    res.json({ message: "Java Course Deleted Successfully" });
};