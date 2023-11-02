


'use strict';

module.exports.handler = async (event) => {
    const body = JSON.parse(event.body);

    if (!body || !body.text) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Ogiltig förfrågan. Inga data hittades.' }),
        };
    }

    const text = body.text;
    const wordCount = text.split(/\s+/).filter((word) => word).length;

    return {
        statusCode: 200,
        body: JSON.stringify({ wordCount }),
    };
};
