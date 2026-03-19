exports.handler = async function() {
  try {
    const r = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/cny.json');
    const d = await r.json();
    const rate = d.cny && d.cny.rub ? d.cny.rub : 11.54;
    return {
      statusCode: 200,
      headers: {'Access-Control-Allow-Origin': '*'},
      body: JSON.stringify({rate: Math.round(rate * 100) / 100})
    };
  } catch(e) {
    return {
      statusCode: 200,
      headers: {'Access-Control-Allow-Origin': '*'},
      body: JSON.stringify({rate: 11.54})
    };
  }
};
