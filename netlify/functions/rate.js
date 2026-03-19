exports.handler = async function() {
  try {
    const r = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/rub.json');
    const d = await r.json();
    const rubPerCny = d.rub && d.rub.cny ? Math.round((1 / d.rub.cny) * 100) / 100 : 11.54;
    return {
      statusCode: 200,
      headers: {'Access-Control-Allow-Origin': '*'},
      body: JSON.stringify({rate: rubPerCny})
    };
  } catch(e) {
    return {
      statusCode: 200,
      headers: {'Access-Control-Allow-Origin': '*'},
      body: JSON.stringify({rate: 11.54})
    };
  }
};
