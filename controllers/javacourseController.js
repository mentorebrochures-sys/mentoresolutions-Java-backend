const supabase = require('../supabaseClient');

exports.getJavaCourse = async (req, res) => {
    try {
        const { data, error } = await supabase.from('java_course').select('*');
        if (error) throw error;
        res.status(200).json(data || []); 
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createJavaCourse = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('java_course')
            .insert([req.body])
            .select();
        if (error) throw error;
        res.status(201).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateJavaCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const { data, error } = await supabase
            .from('java_course')
            .update(req.body)
            .eq('id', id)
            .select();
        if (error) throw error;
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};