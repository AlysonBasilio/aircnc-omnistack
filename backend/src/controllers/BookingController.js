const Booking = require('../models/Booking');

module.exports = {
    async store(req, res) {
        const { user_id } = req.headers;
        const { spot_id } = req.params;
        const { date } = req.body;

        const booking = await Booking.create({ 
            user: user_id,
            spot: spot_id,
            date 
        });

        try {
            await booking.populate('spot').populate('user').execPopulate();
        } catch (error) {
            console.log(error);
        }

        return res.json(booking);
    }
};