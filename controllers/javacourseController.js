const supabase = require('../supabaseClient');

// Sarva functions ekach object madhe export kara (Vercel sathi safe)
const javaController = {
    getJavaCourse: async (req, res) => {
        try {
            const { data, error } = await supabase.from('java_course').select('*');
            if (error) throw error;
            res.status(200).json(data);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    createJavaCourse: async (req, res) => {
        try {
            const { duration2, start_date2 } = req.body;
            const { data, error } = await supabase
                .from('java_course')
                .insert([{ duration2, start_date2 }])
                .select();
            if (error) throw error;
            res.status(201).json(data);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    updateJavaCourse: async (req, res) => {
        try {
            const { id } = req.params;
            const { duration2, start_date2 } = req.body;
            const { data, error } = await supabase
                .from('java_course')
                .update({ duration2, start_date2 })
                .eq('id', id)
                .select();
            if (error) throw error;
            res.status(200).json(data);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    deleteJavaCourse: async (req, res) => {
        try {
            const { id } = req.params;
            const { error } = await supabase.from('java_course').delete().eq('id', id);
            if (error) throw error;
            res.status(200).json({ message: "Deleted" });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
};

module.exports = javaController;