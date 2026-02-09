const supabase = require('../supabaseClient');

// Using a constant so you only have to change the table name in one place
const TABLE_NAME = 'courses1';

// 1. Get all records (Updated table name)
exports.getAll = async (req, res) => {
    const { data, error } = await supabase.from(TABLE_NAME).select('*');
    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
};

// 2. Create new record (Updated table name and column names)
exports.create = async (req, res) => {
    // Note: Use duration1 and start_date1 to match your new table schema
    const { duration1, start_date1 } = req.body; 
    
    const { data, error } = await supabase
        .from(TABLE_NAME)
        .insert([{ duration1, start_date1 }])
        .select(); 

    if (error) return res.status(400).json({ error: error.message });
    res.status(201).json(data);
};

// 3. Update record (Updated table name)
exports.update = async (req, res) => {
    const { data, error } = await supabase
        .from(TABLE_NAME)
        .update(req.body) // Ensure req.body contains duration1 or start_date1
        .eq('id', req.params.id)
        .select();

    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
};

// 4. Delete record (Updated table name)
exports.delete = async (req, res) => {
    const { error } = await supabase
        .from(TABLE_NAME)
        .delete()
        .eq('id', req.params.id);

    if (error) return res.status(400).json({ error: error.message });
    res.json({ message: "Course Deleted Successfully" });
};