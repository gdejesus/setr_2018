	function gcm(left, right) {
	    while (right > 0) {
	        let tmp = right;
	        right = left % right;
	        left = tmp;
	    }
	    return left;
	}

	function gcm(values) {
	    if (values.length < 1)
	        return 0;
	    let tmp = values[0];
	    for (let i = values.length; i-- > 1;)
	        tmp = gcm(tmp, values[i]);

	    return tmp;
	}

	function lcm(left, right) {
	    return left * (right / gcm(left, right));
	}

	function lcm(values) {
	    if (values.length < 1)
	        return 0;

	    let tmp = values[0];
	    for (let i = values.length; i-- > 1;)
	        tmp = lcm(tmp, values[i]);

	    return tmp;
	}