$( () => {

	function disablePanScrolling( elem ) {
		$( elem ).off( 'mousemove' );
	}

	function enablePanScrolling( elem, event ) {
		let mx = event.clientX,
			my = event.clientY;

		console.log( 'mx: ' + mx + ' my: ' + my );

		$( elem ).on( 'mousemove', ( mmevent ) => {
			mx = mmevent.clientX - mx;
			my = mmevent.clientY - my;

			const maxLeft = -1 * ( $( elem ).children().first().outerWidth( true ) - $( elem ).parent().outerWidth( true ) ),
				maxTop = -1 * ( 10 + $( elem ).outerHeight( true ) - $( elem ).parent().outerHeight( true ) ),

				position = $( elem ).position();
			if ( position.left + mx > 10 ) {
				$( elem ).css( 'left', '10px' );
			} else if ( position.left + mx < maxLeft ) {
				$( elem ).css( 'left', maxLeft + 'px' );
			} else {
				$( elem ).css( 'left', '+=' + mx );
			}
			if ( position.top + my > 10 ) {
				$( elem ).css( 'top', '10px' );
			} else if ( position.top + my < maxTop ) {
				$( elem ).css( 'top', maxTop + 'px' );
			} else {
				$( elem ).css( 'top', '+=' + my );
			}

			mx = mmevent.clientX;
			my = mmevent.clientY;
		} );
	}

	setInterval( () => {
		$( '.panscroll-element' ).each( function () {
			const styleWidth = $( this )[ 0 ].style.width,
				styleHeight = $( this )[ 0 ].style.height,

				contentWidth = $( this ).children( '.panscroll-container' ).outerWidth( true ),
				contentHeight = $( this ).children( '.panscroll-container' ).outerHeight( true );

			if ( styleWidth.includes( '%' ) ) {
				const ratioWidth = parseInt( styleWidth.slice( 0, Math.max( 0, styleWidth.length - 1 ) ) );
				$( this ).width( contentWidth * ratioWidth / 100 );
			}

			if ( styleHeight.includes( '%' ) ) {
				const ratioHeight = parseInt( styleHeight.slice( 0, Math.max( 0, styleHeight.length - 1 ) ) );
				$( this ).height( contentHeight * ratioHeight / 100 );
			}
			$( this ).fadeIn();
		} );
	}, 1000 );

	$( '.panscroll-container' ).on( 'mousedown', function ( event ) {
		enablePanScrolling( this, event );
	} );

	$( '.panscroll-container' ).on( 'mouseup', function () {
		disablePanScrolling( this );
	} );

	$( '.panscroll-container' ).on( 'mouseleave', function () {
		disablePanScrolling( this );
	} );

} );
