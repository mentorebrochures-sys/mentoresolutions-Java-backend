const supabase = require('../supabaseClient');

exports.getAll = async (req, res) => {
    const { data, error } = await supabase.from('java_courses').select('*');
    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
};

exports.create = async (req, res) => {
    const { duration, start_date, batch_time } = req.body; 

    // FIX: If batch_time is null, undefined, or empty string, use "TBA"
    const final_batch_time = batch_time && batch_time.trim() !== "" ? batch_time : "TBA";

    const { data, error } = await supabase
        .from('java_courses')
        .insert([{ 
            duration, 
            start_date, 
            batch_time: final_batch_time // Use the safe value here
        }])
        .select();

    if (error) return res.status(400).json({ error: error.message });
    res.status(201).json(data);
};

exports.update = async (req, res) => {
    // If the user clears the input in update, we also check it here
    const updateData = { ...req.body };
    
    if (updateData.hasOwnProperty('batch_time') && (!updateData.batch_time || updateData.batch_time.trim() === "")) {
        updateData.batch_time = "TBA";
    }

    const { data, error } = await supabase
        .from('java_courses')
        .update(updateData)
        .eq('id', req.params.id)
        .select();

    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
};

exports.delete = async (req, res) => {
    const { error } = await supabase
        .from('java_courses')
        .delete()
        .eq('id', req.params.id);

    if (error) return res.status(400).json({ error: error.message });
    res.json({ message: "Java Course Deleted Successfully" });
};