import React from 'react';

const PriceTable = () => {
  const styles = {
    tdUpper: {
      borderTop: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      borderBottom: 'solid 1px #dee2e6',
    },
    tdBottom: {
      border: 'none',
      marginBottom: '22px',
    },
    li: { listStyle: 'disc inside' },
  };
  return (
    <div className='content-column col-lg-12'>
      {/* <p style={{ textAlign: 'left' }}>Price</p> */}
      <li style={{ listStyle: 'none', textAlign: 'left' }}>
        Starting from as little as N60,000… you will get your property completely verified and
        indemnified against all property related losses and scams.
      </li>
      <p style={{ marginTop: '15px' }}>Verification Price Table</p>
      <div className='table-responsive' id='verification-table'>
        <table className='table table-bordered table-center'>
          <thead style={{ backgroundColor: '#448414', color: '#ffffff' }}>
            <tr>
              <th scope='col'>Verification type</th>
              <th scope='col'>Verification Level</th>
              <th scope='col'>Verification Fee (5-7 working days)</th>
              <th scope='col'>VIP Veri-Fee (48 Hours Delivery)</th>
              <th scope='col'>More</th>
              <th scope='col'>Professional Fee If Closable and/or Perfectable </th>
            </tr>
          </thead>
          <tbody>
            {/* R1 */}
            <tr>
              <td className='text'>Site and Surveying related </td>
              {/* <td className='text'>Basic </td> */}
              <td className='text'>
                <tr>
                  <td style={styles.tdUpper}>Basic</td>
                </tr>
                <tr>
                  <td style={styles.tdBottom}>Comprehensive</td>
                </tr>
              </td>
              <td className='text'>
                <tr>
                  <td style={styles.tdUpper}>N60,000</td>
                </tr>
                <tr>
                  <td style={styles.tdBottom}>N200,000</td>
                </tr>
              </td>
              <td className='text'>
                <tr>
                  <td style={styles.tdUpper}>+N50,000</td>
                </tr>
                <tr>
                  <td style={styles.tdBottom}>+N80,000</td>
                </tr>
              </td>
              <td className='text'>
                <tr>
                  <td style={styles.tdBottom}>+N50,000 Per Every Extra Acre</td>
                </tr>
                <tr>
                  <td style={styles.tdBottom}></td>
                </tr>
              </td>
              <td className='text'>10% property market value</td>
            </tr>
            {/* R2 */}
            <tr>
              <td className='text'>Legal and Land Bureau</td>
              {/* <td className='text'>Basic </td> */}
              <td className='text'>
                <tr>
                  <td style={styles.tdUpper}>Basic</td>
                </tr>
                <tr>
                  <td style={styles.tdBottom}>Comprehensive</td>
                </tr>
              </td>
              <td className='text'>
                <tr>
                  <td style={styles.tdUpper}>N70,000</td>
                </tr>
                <tr>
                  <td style={styles.tdBottom}>N200,000</td>
                </tr>
              </td>
              <td className='text'>
                <tr>
                  <td style={styles.tdUpper}>+N50,000</td>
                </tr>
                <tr>
                  <td style={styles.tdBottom}>+N80,000</td>
                </tr>
              </td>
              <td className='text'>
                <tr>
                  <td style={styles.tdUpper}>N/A</td>
                </tr>
                <tr>
                  <td style={styles.tdBottom}>N/A</td>
                </tr>
              </td>
              <td className='text'></td>
            </tr>
            {/* R3 */}
            <tr>
              <td className='text'>Physical Planning</td>
              {/* <td className='text'>Basic </td> */}
              <td className='text'>
                <tr>
                  <td style={styles.tdUpper}>Basic</td>
                </tr>
                <tr>
                  <td style={styles.tdBottom}>Comprehensive</td>
                </tr>
              </td>
              <td className='text'>
                <tr>
                  <td style={styles.tdUpper}>N70,000</td>
                </tr>
                <tr>
                  <td style={styles.tdBottom}>N200,000</td>
                </tr>
              </td>
              <td className='text'>
                <tr>
                  <td style={styles.tdUpper}>+N50,000</td>
                </tr>
                <tr>
                  <td style={styles.tdBottom}>+N80,000</td>
                </tr>
              </td>
              <td className='text'>
                <tr>
                  <td style={styles.tdUpper}>N/A</td>
                </tr>
                <tr>
                  <td style={styles.tdBottom}>N/A</td>
                </tr>
              </td>
              <td className='text'></td>
            </tr>
            {/* R4 */}
            <tr>
              <td className='text'>Opinion of Value</td>
              {/* <td className='text'>Basic </td> */}
              <td className='text'>
                <tr>
                  <td style={styles.tdUpper}>Basic</td>
                </tr>
                <tr>
                  <td style={styles.tdBottom}>Comprehensive</td>
                </tr>
              </td>
              <td className='text'>
                <tr>
                  <td style={styles.tdUpper}>N70,000</td>
                </tr>
                <tr>
                  <td style={styles.tdBottom}>N200,000</td>
                </tr>
              </td>
              <td className='text'>
                <tr>
                  <td style={styles.tdBottom}>
                    Scope of work determines duration and additional payments.
                  </td>
                </tr>
                <tr>
                  <td style={styles.tdBottom}></td>
                </tr>
              </td>
              <td className='text'>
                <tr>
                  <td style={styles.tdBottom}></td>
                </tr>
                <tr>
                  <td style={styles.tdBottom}></td>
                </tr>
              </td>
              <td className='text'></td>
            </tr>
            {/* R5 */}
            <tr>
              <td className='text'>Structural(Viable Structures)</td>
              {/* <td className='text'>Basic </td> */}
              <td className='text'>
                <tr>
                  <td style={styles.tdUpper}>Basic</td>
                </tr>
                <tr>
                  <td style={styles.tdBottom}>Comprehensive</td>
                </tr>
              </td>
              <td className='text'>
                <tr>
                  <td style={styles.tdUpper}>N100,000</td>
                </tr>
                <tr>
                  <td style={styles.tdBottom}>N250,000</td>
                </tr>
              </td>
              <td className='text'>
                <tr>
                  <td style={styles.tdUpper}>+N50,000</td>
                </tr>
                <tr>
                  <td style={styles.tdBottom}>+N80,000</td>
                </tr>
              </td>
              <td className='text'>
                <tr>
                  <td style={styles.tdBottom}>+N50,000 Per Every Detached Building (Structure)</td>
                </tr>
                <tr>
                  <td style={styles.tdBottom}></td>
                </tr>
              </td>
              <td className='text'></td>
            </tr>
            {/* R6 */}
            <tr>
              <td className='text'>Omo-Onile/Street Investigation</td>
              {/* <td className='text'>Basic </td> */}
              <td className='text'>
                UNREGISTERED: ownership, titles, disputes, encumbrance, transfers etc.
              </td>
              <td className='text'>N200,000</td>
              <td className='text'>Scope of work determines duration and additional payments.</td>
              <td className='text'></td>
              <td className='text'></td>
            </tr>
            {/* R7 */}
            <tr>
              <td className='text'>Existing Property Ready for:</td>
              {/* <td className='text'>Basic </td> */}
              <td className='text'>
                Complete Documentation, Survey and Title Perfection in the new owner's credentials.
              </td>
              <td className='text'>N100,000</td>
              <td className='text'>Scope of work determines duration and additional payments.</td>
              <td className='text'></td>
              <td className='text'></td>
            </tr>
          </tbody>
        </table>
        <ul>
          <li style={styles.li}>N/A == Not Applicable </li>
          <li style={styles.li}>
            Client pays all statutory fees as well as other ancillary expenses relating to taking
            property possession, Survey and title perfection, etc.
          </li>
          <li>
            <p style={{ textAlign: 'center', marginTop: '15px', marginBottom: '15px' }}>
              To know the kind of Verification type(s) suitable for your need, click this button now
              to enter your details and one of our team will get in touch with you almost
              immediately.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PriceTable;
