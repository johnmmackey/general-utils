const jSTrimMask = p => (
	(p, k, v) => {
		if (!p || !k || typeof v !== 'string')
			return v;

		const trimLength = (typeof p === 'number' && p) || (typeof p === 'object' && typeof p.trim === 'number' && p.trim) || 0;
		const maskFields = (Array.isArray(p) && p) || (typeof p === 'object' && Array.isArray(p.mask) && p.mask) || [];

		const trimmed = trimLength
			? v.slice(0, trimLength) + (v.length > trimLength ? `...` : '')
			: v;

		const masked = maskFields.includes(k)
			? `***** (Masked - Length: ${v.length}) *****`
			: trimmed;

		return masked;
	}
).bind(this, p)

module.exports = { jSTrimMask }